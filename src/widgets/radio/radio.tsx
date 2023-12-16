import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput} from "react-native";
import { RadioButton, RadioButtonGroupProps } from "react-native-paper";
import { useRecoilState } from "recoil";
import { contentState } from "../../service/card-content-controller/card-content-controller";
import { radioState } from "../../service/radio-content-controller/radio-content-controller";

const Radio = () => {
  const [radioContent, setRadioContent] = useRecoilState(radioState);
  const [value, setValue] = useState('first');
  let buttons:ReactNode[] = [];

  function setRecoilRadio(event:any){
    setRadioContent({...radioContent,content:[...radioContent.content,event.nativeEvent.text]})
  }
  const returnBtn = () => {
    for (let i = 1; i <= radioContent.count; i++) {
      buttons.push(<View style={styles.radioContainer} key={i}>
        <RadioButton.Android value={i+""}/>
        <TextInput defaultValue={`옵션 ${i}`} onSubmitEditing={(event)=>{setRecoilRadio(event)}}>  
        </TextInput>
        </View>)
    }
    return (buttons);
  }

  return (
    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
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
