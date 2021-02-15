import React from "react";

import { Text, StyleSheet, View } from "react-native";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#f00",
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default Home;
