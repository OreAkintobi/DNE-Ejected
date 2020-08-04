import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, StatusBar } from "react-native";
import AppNavigator from "./AppNavigator";
import { theme } from "../theme/types";
import Screens from "../screens";

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: theme.colors.DARK_TEXT,
        }}
      />
      <StatusBar
        backgroundColor={theme.colors.DARK_TEXT}
        barStyle="light-content"
      />
      <AuthStack.Navigator
        initialRouteName="ResolveAuthScreen"
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <AuthStack.Screen
          name="ResolveAuthScreen"
          component={Screens.ResolveAuthScreen}
          options={{ gestureEnabled: false }}
        />
        <AuthStack.Screen
          name="SignupScreen"
          component={Screens.SignupScreen}
        />
        <AuthStack.Screen
          name="LoginScreen"
          component={Screens.LoginScreen}
          options={{ gestureEnabled: false }}
        />
        <AuthStack.Screen
          name="ForgotPasswordScreen"
          component={Screens.ForgotPasswordScreen}
        />
        <AuthStack.Screen
          name="ResetPasswordScreen"
          component={Screens.ResetPasswordScreen}
        />
        <AuthStack.Screen name="HomeScreen" component={AppNavigator} />
      </AuthStack.Navigator>
    </>
  );
}
