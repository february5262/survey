import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput} from "react-native";
import { useRecoilState } from "recoil";
import { contentState } from "../../service/card-content-controller/card-content-controller";
import { checkState } from "../../service/check-content-controller/check-content-controller";
import { Checkbox } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const Check = () => {
  const [checkContent, setCheckContent] = useRecoilState(checkState);
  const [check, setCheck] = useState<Array<"checked" | "unchecked" | "indeterminate">>([]);
  let checkBtn:ReactNode[] = [];

  function setRecoilCheck(event:any){ 
    setCheckContent({...checkContent,content:[...checkContent.content,event.nativeEvent.text]})
  }
  function setCheckArr(index:number){
    const tmp = [...check];
    check[index]==="checked"?tmp[index]="unchecked":tmp[index]="checked";
    setCheck(tmp);
  }
  const returnBtn = () => {
    for (let i = 0; i < checkContent.count; i++) {
      checkBtn.push(
        <View style={styles.checkContainer} key={i}>
          <Checkbox.Android status={check[i]} onPress={()=>{setCheckArr(i)}}/>
          <TextInput defaultValue={`옵션 ${i+1}`} onSubmitEditing={(event)=>{setRecoilCheck(event)}}>  
          </TextInput>
        </View>)
    }
    return (checkBtn);
  }
  useEffect(()=>{
    for (let i = 0; i < checkContent.count; i++) {
      check.push("unchecked")
    }
  },[])
    
  useEffect(()=>{
  },[check])

  return (
    <View>
      {returnBtn()}
    </View>
  );
};
export default React.memo(Check);

const styles = StyleSheet.create({
  checkContainer: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
});
