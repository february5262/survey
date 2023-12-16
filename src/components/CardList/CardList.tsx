import React, { useEffect, useMemo, useState } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../Card/Card";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cardsState, contentState, currentCard } from "../../service/card-content-controller/card-content-controller";
import { FontAwesome5 } from "@expo/vector-icons";

const CardList = () => {
    const [content,setContent] = useRecoilState(contentState);
    const setCardArr = useSetRecoilState(cardsState)
    const cards = useRecoilValue(cardsState)
    
    function addCard(){
        setCardArr((cardArr)=>[...cardArr,content]);
    }
    
    useEffect(()=>{
        addCard();
    },[])

    return (
    <SafeAreaView style={{width:'100%',flex:1}}> 
        <FlatList
        style={{paddingHorizontal:20}}
        data={cards}
        renderItem={({item}) => <Card item={item}/> }
        keyExtractor={(item, index) => String(index)}
        />
        <TouchableOpacity onPress={addCard} style={styles.add}><FontAwesome5 name="plus" size={24} color="black" /></TouchableOpacity>        
    </SafeAreaView>
    );
};

export default React.memo(CardList);
const styles = StyleSheet.create({
    add: {
      position:'absolute',
      width:60,
      height:60,
      top:40,
      right:20,
      zIndex:9999,
      backgroundColor:"#fff",
      borderRadius:100,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },

    btnContainer:{
        width:'100%',
        display:'flex',
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:'center',
    },
  });