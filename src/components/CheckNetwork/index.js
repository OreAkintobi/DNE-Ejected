import React from "react";
import { NetworkConsumer } from "react-native-offline";
import { View, Text } from "react-native";

export default function CheckNetwork({ screen }) {
  return (
    <NetworkConsumer>
      {({ isConnected }) =>
        isConnected ? (
          screen
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>You cannot use this app since you are offline</Text>
          </View>
        )
      }
    </NetworkConsumer>
  );
}
