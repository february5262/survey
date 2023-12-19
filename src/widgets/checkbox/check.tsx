import React, { ReactNode, useMemo, useState } from "react";
import { View, StyleSheet, TextInput} from "react-native";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cardsState, contentSelector, contentState, currentCard } from "../../service/card-content-controller/card-content-controller";
import { checkState } from "../../service/check-content-controller/check-content-controller";
import { Checkbox } from "react-native-paper";

const Check = (props:any) => {
  const [checkContent, setCheckContent] = useRecoilState(checkState);
  const [check, setCheck] = useState<Array<"checked" | "unchecked" | "indeterminate">>([]);
  const cards = useRecoilState(cardsState);
  const setCardArr = useSetRecoilState(contentSelector);
  
  let checkBtn:ReactNode[] = [];

  function setCheckArr(index:number){
    const tmp = [...props.item.checked];
    check[index]==="checked"?tmp[index]="unchecked":tmp[index]="checked";
    setCheck(tmp);
    setCardArr({id:props.item.index,key:"checked",val:tmp})
  }

  function setCheckArrContent(index:number,input:string){
    const tmp:string[] = [...props.item.checkContent];
    tmp[index]=input;
    setCardArr({id:props.item.index,key:"checkContent",val:tmp})
  }

  const returnBtn = () => {
    for (let i = 0; i < checkContent.count; i++) {
      checkBtn.push(
        <View style={styles.checkContainer} key={i}>
          <Checkbox.Android disabled={!props.preview} status={props.item.checked[i]} onPress={()=>{setCheckArr(i)}}/>
          <TextInput placeholder={`옵션 ${i+1}`} onChangeText={(text)=>{setCheckArrContent(i,text)}} editable={props.preview}>  
          {props.item.checkContent[i]}
          </TextInput>
        </View>)
    }
    return (checkBtn);
  }


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
