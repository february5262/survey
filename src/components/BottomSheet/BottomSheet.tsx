import { useActionSheet } from '@expo/react-native-action-sheet';
import { Entypo } from '@expo/vector-icons';
import { Button, TouchableOpacity } from 'react-native';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { cardsState } from '../../service/card-content-controller/card-content-controller';
import { useEffect,useMemo } from 'react';

export default function TypeBtn(props:any) {
  const { showActionSheetWithOptions } = useActionSheet();
  const setCardArr = useSetRecoilState(cardsState);

  const onPress = () => { 
    const options = ['단답형', '장문형', '객관식 질문','체크박스','닫기'];
    const destructiveButtonIndex = 5;
    const cancelButtonIndex = 5;
    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
      destructiveButtonIndex
    }, (selectedIndex: any) => {
      switch (selectedIndex) {
        case 0: setCardArr((card)=>card.map((item:any)=>item.index == props.item.index?{...item,type:"short"}:item)); break;
        case 1: setCardArr((card)=>card.map((item:any)=>item.index == props.item.index?{...item,type:"long"}:item)); break;
        case 2: setCardArr((card)=>card.map((item:any)=>item.index == props.item.index?{...item,type:"radio"}:item)); break;
        case 3: setCardArr((card)=>card.map((item:any)=>item.index == props.item.index?{...item,type:"check"}:item)); break;
        case 4:break;
        case destructiveButtonIndex:break;
        // case cancelButtonIndex:
      }});
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Entypo name="dots-three-vertical" size={24} color="black" />
    </TouchableOpacity>
  )
};