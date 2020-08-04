import React from "react";
import { ActivityIndicator, View } from "react-native";

const LoadingDataScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );
};

export default LoadingDataScreen;
