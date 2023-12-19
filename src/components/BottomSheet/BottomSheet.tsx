import { useActionSheet } from '@expo/react-native-action-sheet';
import { Entypo } from '@expo/vector-icons';
import { Button, TouchableOpacity } from 'react-native';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { contentSelector } from '../../service/card-content-controller/card-content-controller';
import { useEffect,useMemo } from 'react';
import React from 'react';

export default function TypeBtn(props:any) {
  const { showActionSheetWithOptions } = useActionSheet();
  const setType = useSetRecoilState(contentSelector);

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
        case 0: setType({id:props.item.index,key:"type",val:"short"}); break;
        case 1: setType({id:props.item.index,key:"type",val:"long"}); break;
        case 2: setType({id:props.item.index,key:"type",val:"radio"}); break;
        case 3: setType({id:props.item.index,key:"type",val:"check"}); break;
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