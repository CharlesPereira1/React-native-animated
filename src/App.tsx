import "react-native-gesture-handler";

import React from "react";
import { StatusBar, View } from "react-native";

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" />
    <View style={{ flex: 1, backgroundColor: "#312e36" }} />
  </>
);
export default App;
