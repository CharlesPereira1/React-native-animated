import React from "react";
import { SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";

import rocket from "./assets/rocket.json";

const App: React.FC = () => (
  <SafeAreaView
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <LottieView
      resizeMode="contain"
      autoSize
      source={rocket}
      autoPlay
      loop
      speed={0.5}
      onAnimationFinish={() => {
        console.log("Animated Finished!");
      }}
    />
  </SafeAreaView>
);
export default App;
