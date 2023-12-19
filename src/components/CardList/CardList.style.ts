import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    add: {
      position: "absolute",
      width: 50,
      height: 50,
      top: 40,
      right: 20,
      zIndex: 9999,
      backgroundColor: "#fff",
      borderRadius: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    preview: {
      position: "absolute",
      width: 50,
      height: 50,
      top: 100,
      right: 20,
      zIndex: 9999,
      backgroundColor: "#fff",
      borderRadius: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
  
    btnContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  });