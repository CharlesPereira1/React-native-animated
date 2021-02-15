import "react-native-gesture-handler";

import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./Routes";

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <Routes />
    </View>
  </NavigationContainer>
);
export default App;
