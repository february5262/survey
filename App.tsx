import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RecoilRoot } from "recoil";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CardList from "./src/components/CardList/CardList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Preview from "./pages/preview";


const Stack = createStackNavigator();
export default function App() {
  return (
    <RecoilRoot>
      <ActionSheetProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={CardList} />
              <Stack.Screen name="Preview" component={Preview} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ActionSheetProvider>
    </RecoilRoot>
  );
}
