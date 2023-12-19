import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { View, TextInput, TouchableOpacity,Text } from "react-native";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cardsState, contentState, currentCard } from "../../service/card-content-controller/card-content-controller";
import Radio from "../../widgets/radio/radio";
import Check from "../../widgets/checkbox/check";
import { styles } from "./Card.style";
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
  disabled?:boolean
}
const CustomText = (props:Props) => {
  return (
    <View style={props.boxStyle}>
      <TextInput maxLength={props.maxLength}
        style={props.textStyle}
        defaultValue={props.dValue}
        placeholder={props.placeholder}
        onChangeText={props.onChange}
        editable={props.disabled}
      >{props.inputVal}</TextInput>
    </View>
  )
}

const Card = (props:any) => {
  const [preview,setPreview] = useState(props.preview?props.preview:false);

  const [content,setContent] = useRecoilState(contentState);
  const [index,setIndex] = useState(-1);
  const cards = useRecoilValue(cardsState);
  const setCardIndex = useSetRecoilState(currentCard);
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
        case 'short': return <CustomText disabled={preview} boxStyle={styles.inputShortBox} textStyle={styles.text} placeholder={'단답형 텍스트'} inputVal={props.item.text} maxLength={10} onChange={(e:string)=>{changeCardValue(index,e,"text")}}/>;
        case 'long': return <CustomText disabled={preview} boxStyle={styles.inputBox} textStyle={styles.text} placeholder={'장문형 텍스트'} inputVal={props.item.text} onChange={(e:string)=>{changeCardValue(index,e,"text")}}/> ;
        case 'check': return <Check item={props.item} preview={preview}/>;
        case 'radio': return <Radio item={props.item} preview={preview}/>;
        default: return <Text>없음</Text>
      }
  }
  useMemo(()=>{
    setIndex(props.item.index);
  },[props])
  
  useEffect(()=>{
    setCardIndex(index);
    setContent({...content,index:content.index+1})
  },[])

  return (
  <View style={styles.container}>
    <CustomText disabled={preview} boxStyle={styles.inputBox} textStyle={styles.title} inputVal={props.item.title} onChange={(e:string)=>{changeCardValue(index,e,'title')}}/>
    <CustomText disabled={preview} boxStyle={styles.descBox} textStyle={styles.desc} inputVal={props.item.desc} onChange={(e:string)=>{changeCardValue(index,e,'desc')}}/>
    <View style={styles.inputContainer}>
      {typeReturn()}
    </View>
    {preview!=false &&
    <View style={styles.btnContainer}>
        <TouchableOpacity onPress={duplicate}><Ionicons name="duplicate-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity onPress={deleteCard}><Feather name="trash-2" size={24} color="black" /></TouchableOpacity>
        <TypeBtn item={props.item}/>
    </View>}
  </View>
  );
};


export default React.memo(Card);

