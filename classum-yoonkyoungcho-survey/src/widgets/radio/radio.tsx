import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { View, StyleSheet, Image, TextInput} from "react-native";
import { RadioButton } from "react-native-paper";
import { useRecoilState, useSetRecoilState } from "recoil";
import { radioState } from "../../service/radio-content-controller/radio-content-controller";
import { cardsState, contentSelector } from "../../service/card-content-controller/card-content-controller";

const Radio = (props:any) => {
  const [radioContent, setRadioContent] = useRecoilState(radioState);
  const [value, setValue] = useState('first');
  const setCardArr = useSetRecoilState(contentSelector);

  let buttons:ReactNode[] = [];

  function setRecoilRadio(index:number,text:string){
    const tmp:string[] = [...props.item.radioContent];
    tmp[index]=text;
    setCardArr({id:props.item.index,key:"radioContent",val:tmp})
  }
  function setRadioValue(value:any){
    setValue(value);
    setCardArr({id:props.item.index,key:"radio",val:value})
  }
  const returnBtn = () => {
    for (let i = 1; i <= radioContent.count; i++) {
      buttons.push(<View style={styles.radioContainer} key={i}>
        <RadioButton.Android value={i+""} disabled={!props.preview}/>
          <TextInput placeholder={`옵션 ${i}`} onChangeText={(text)=>{setRecoilRadio(i,text)}} editable={props.preview}>  
          {props.item.radioContent[i]}
        </TextInput>
        </View>)
    }
    return (buttons);
  }
  return (
    <RadioButton.Group onValueChange={value => setRadioValue(value)} value={props.item.radio}>
      {returnBtn()}
    </RadioButton.Group>
  );
};

export default React.memo(Radio);

const styles = StyleSheet.create({
  radioContainer: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
});
