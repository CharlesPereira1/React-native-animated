import React from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import rocket from "../assets/rocket.json";

const Splash: React.FC = () => {
  const navigate = useNavigation();

  return (
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
        loop={false}
        speed={0.5}
        onAnimationFinish={() => {
          console.log("Animated Finished!");
          navigate.navigate("Home");
        }}
      />
    </SafeAreaView>
  );
};
export default Splash;
