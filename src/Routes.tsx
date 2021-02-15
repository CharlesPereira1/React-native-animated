import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import Splash from "./Splash";

const Route = createStackNavigator();

const Routes: React.FC = () => (
  <Route.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#f5f5f5" },
    }}
  >
    <Route.Screen name="Splash" component={Splash} />
    <Route.Screen name="Home" component={Home} />
  </Route.Navigator>
);

export default Routes;
