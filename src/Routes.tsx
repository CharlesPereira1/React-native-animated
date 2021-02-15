import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import Splash from "./Splash";

const Route = createStackNavigator();

const Routes: React.FC = () => (
  <Route.Navigator>
    <Route.Screen name="Home" component={Home} />
    <Route.Screen name="Splash" component={Splash} />
  </Route.Navigator>
);

export default Routes;
