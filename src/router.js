import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./RootNavigation";
import AuthNavigator from "./navigator/AuthNavigator";
import Screens from "./screens";

const RootStack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName="SplashScreen">
        <RootStack.Screen
          name="SplashScreen"
          component={Screens.SplashScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ConfigScreen"
          component={Screens.ConfigScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="HomeScreen"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
