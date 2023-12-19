import React, { useEffect, useMemo, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cardsState } from "../src/service/card-content-controller/card-content-controller";
import Card from "../src/components/Card/Card";

const Preview = ({navigation}) => {
    const cards = useRecoilValue(cardsState)
    
    useEffect(()=>{
    },[])

    return (
    <SafeAreaView> 
        <FlatList
        style={{paddingHorizontal:20, marginTop:-50}}
        data={cards}
        renderItem={({item}) => <Card item={item}/> }
        keyExtractor={(item, index) => String(index)}
        />
    </SafeAreaView>
    );
};

export default React.memo(Preview);
