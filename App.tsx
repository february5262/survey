import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RecoilRoot } from "recoil";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CardList from "./src/components/CardList/CardList";

export default function App() {
  return (
    <RecoilRoot>
      <ActionSheetProvider>
        <SafeAreaProvider>
          <View style={styles.container}>
            <CardList />
          </View>
        </SafeAreaProvider>
      </ActionSheetProvider>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.2)',
    alignItems: "center",
    justifyContent: "center",
    position:'relative',
  },
});
