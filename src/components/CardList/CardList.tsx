import React, { useEffect, useMemo, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../Card/Card";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cardsState, contentState } from "../../service/card-content-controller/card-content-controller";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import { styles } from "./CardList.style";

const CardList = ({navigation}) => {
    const [content,setContent] = useRecoilState(contentState);
    const setCardArr = useSetRecoilState(cardsState)
    const cards = useRecoilValue(cardsState)
  console.log(JSON.stringify(cards))
    
    function addCard(){
        setCardArr((cardArr)=>[...cardArr,content]);
    }
    useEffect(()=>{
        addCard();
    },[])

    return (
    <SafeAreaView> 
        <FlatList
        style={{paddingHorizontal:20, marginTop:-50}}
        data={cards}
        renderItem={({item}) => <Card item={item} preview={true}/> }
        keyExtractor={(item, index) => String(index)}
        />
        <TouchableOpacity onPress={addCard} style={styles.add}><FontAwesome5 name="plus" size={24} color="black" /></TouchableOpacity>        
        <TouchableOpacity onPress={()=>{navigation.navigate('Preview')}} style={styles.preview}><Fontisto name="preview" size={24} color="black" /></TouchableOpacity>        
    </SafeAreaView>
    );
};

export default React.memo(CardList);
