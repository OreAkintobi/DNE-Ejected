import React, { useContext } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { theme } from "../theme/types";
import TabBarLabel from "../commons/tab-bar-label";
import Screens from "../screens";
import HomeIcon from "../../assets/icons/BottomNav/HomeIcon";
import SubscriptionsIcon from "../../assets/icons/BottomNav/SubscriptionsIcon";
import PaymentsIcon from "../../assets/icons/BottomNav/PaymentsIcon";
import { Context as AuthContext } from "../store/auth-context";
import { Context as DataContext } from "../store/data-context";
import UserIcon from "../../assets/icons/BottomNav/UserIcon";
import { IconContainer } from "./styles";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const { state: authState } = useContext(AuthContext);
  const { state: dataState } = useContext(DataContext);
  const { colors } = theme;

  return (
    <Tab.Navigator
      activeColor={dataState.theme.secondary}
      inactiveColor={colors.MEDIUM_GRAY}
      barStyle={{ backgroundColor: colors.COLOR_WHITE }}
      initialRouteName="HomeScreen"
      labeled={false}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Screens.HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <HomeIcon fillColor={color} isFocused={focused} />
              <TabBarLabel label="Home" {...{ color, focused }} />
            </IconContainer>
          ),
        }}
      />

      <Tab.Screen
        name="PurchasesScreen"
        component={Screens.SubscriptionScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <SubscriptionsIcon fillColor={color} isFocused={focused} />
              <TabBarLabel label="Subscriptions" {...{ color, focused }} />
            </IconContainer>
          ),
        }}
      />

      <Tab.Screen
        name="PaymentScreen"
        component={Screens.PaymentScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <PaymentsIcon fillColor={color} isFocused={focused} />
              <TabBarLabel label="Payments" {...{ color, focused }} />
            </IconContainer>
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={Screens.ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <UserIcon fillColor={color} isFocused={focused} />
              <TabBarLabel label="You" {...{ color, focused }} />
            </IconContainer>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
