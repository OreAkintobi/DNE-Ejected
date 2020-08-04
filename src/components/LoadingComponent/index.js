import React from "react";
import { ActivityIndicator } from "react-native";

const LoadingComponent = ({ color }) => {
  return <ActivityIndicator size="small" color={color} />;
};

export default LoadingComponent;
