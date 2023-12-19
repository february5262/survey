import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        width:Dimensions.get('window').width-40,
        borderRadius:10,
        padding:20,
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'column',
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
    desc:{
        color:"#808080",
        fontSize:14,
    },
    text:{
        color:"#000",
        fontSize:18,
    },
    inputShortBox:{
        flex:1,
        width:100,
        paddingVertical:10,
        marginBottom:20,
        borderBottomColor:"#000",
        borderBottomWidth:1,
    },
    inputBox:{
        flex:1,
        width:'100%',
        paddingVertical:10,
        marginBottom:20,
        borderBottomColor:"#000",
        borderBottomWidth:1,
    },
    descBox:{
        width:'100%',
        marginTop:-10,
        marginBottom:20,
        paddingBottom:5,
        borderBottomColor:"#dbdbdb",
        borderBottomWidth:1,
    },
    inputContainer:{
        width:'100%',
    },
    btnContainer:{
        width:'100%',
        display:'flex',
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:'center',
    },
})
