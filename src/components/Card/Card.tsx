import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { View, TextInput, TouchableOpacity,Text } from "react-native";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cardsState, contentState, currentCard } from "../../service/card-content-controller/card-content-controller";
import Radio from "../../widgets/radio/radio";
import Check from "../../widgets/checkbox/check";
import { styles } from "./Card.style";
import { textState } from "../../service/text-content-controller/text-content-controller";
import { Ionicons, Feather } from "@expo/vector-icons";
import TypeBtn from "../BottomSheet/BottomSheet";

interface Props{
  boxStyle:any,
  textStyle:any,
  dValue?:string,
  placeholder?:string,
  inputVal?:string,
  onChange:any,
  maxLength?:number,
}
const CustomText = (props:Props) => {
  return (
    <View style={props.boxStyle}>
      <TextInput maxLength={props.maxLength}
        style={props.textStyle}
        defaultValue={props.dValue}
        placeholder={props.placeholder}
        onChangeText={props.onChange}
      >{props.inputVal}</TextInput>
    </View>
  )
}

const Card = (props:any) => {
  const [content,setContent] = useRecoilState(contentState);
  const [text,setText] = useRecoilState(textState);
  const [index,setIndex] = useState(-1);
  const cards = useRecoilValue(cardsState);
  const setCardArr = useSetRecoilState(cardsState);
  
  const [reqContent, setReqContent] = useState({
    type:props.item.type,
    index:content.index,
    title:props.item.title,
    desc:props.item.desc,
    essential:false, 
  });

  function duplicate(){
    cards.map((c:any)=>index==c.index?setCardArr((cardArr)=>
      [...cardArr,{...c,index:content.index}]):"");
    }

  function deleteCard(){
    const tmp = cards.filter((c:any)=>c.index != index)
    setCardArr(tmp);
  }
  const changeCardValue = (index:number,input:any, valType:string, ) => {
    setCardArr((card)=>card.map((item:any)=>item.index == index?{...item,[valType]:input}:item))
  } 
  const typeReturn = () =>{
      switch (props.item.type) {
        case 'short': return <CustomText boxStyle={styles.inputBox} textStyle={styles.text} placeholder={text.short} maxLength={10} onChange={(e:string)=>{setText({...text,short:e})}}/>;
        case 'long': return <CustomText boxStyle={styles.inputBox} textStyle={styles.text} placeholder={text.long} onChange={(e:string)=>{setText({...text,long:e})}}/> ;
        case 'check': return <Check/>;
        case 'radio': return <Radio/>;
        default: return <Text>없음</Text>
      }
  }
  useMemo(()=>{
    setIndex(props.item.index);
  },[props])
  
console.log(JSON.stringify(cards))
  useEffect(()=>{
    // changeCardValue(index,reqContent);
    setContent({...content,index:content.index+1})
  },[])

  return (
  <View style={styles.container}>
    <CustomText boxStyle={styles.inputBox} textStyle={styles.title} inputVal={props.item.title} onChange={(e:string)=>{changeCardValue(index,e,'title')}}/>
    <CustomText boxStyle={styles.descBox} textStyle={styles.desc} inputVal={props.item.desc} onChange={(e:string)=>{changeCardValue(index,e,'desc')}}/>
    <View style={styles.inputContainer}>
      {typeReturn()}
    </View>
    <View style={styles.btnContainer}>
        <TouchableOpacity onPress={duplicate}><Ionicons name="duplicate-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity onPress={deleteCard}><Feather name="trash-2" size={24} color="black" /></TouchableOpacity>
        <TypeBtn item={props.item}/>
    </View>
  </View>
  );
};


export default React.memo(Card);

