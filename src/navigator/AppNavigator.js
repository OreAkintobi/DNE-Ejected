import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Screens from "../screens";
import BottomNavigator from "./BottomNavigator";

const AppStack = createStackNavigator();

export default function AppNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <AppStack.Screen name="HomeScreen" component={BottomNavigator} />

      <AppStack.Screen name="AboutScreen" component={Screens.AboutScreen} />

      <AppStack.Screen name="AirtimeScreen" component={Screens.AirtimeScreen} />

      <AppStack.Screen name="DataScreen" component={Screens.DataScreen} />

      <AppStack.Screen
        name="DataPlanScreen"
        component={Screens.DataPlanScreen}
      />

      <AppStack.Screen name="WalletScreen" component={Screens.WalletScreen} />

      <AppStack.Screen
        name="EditProfileScreen"
        component={Screens.EditProfileScreen}
      />

      <AppStack.Screen
        name="PaymentDetailsScreen"
        component={Screens.PaymentDetailsScreen}
      />

      <AppStack.Screen
        name="SubscriptionDetailsScreen"
        component={Screens.SubscriptionDetailsScreen}
      />
    </AppStack.Navigator>
  );
}
