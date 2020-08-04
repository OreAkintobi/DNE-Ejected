import { StyleSheet } from "react-native";

function createBoxShadowStyle({
  elevation,
  shadowColor,
  shadowOpacity = 0.4,
  shadowRadius = Math.floor((0.8 * elevation) / 2),
  width = 0,
  height = 0.5 * elevation,
}) {
  return {
    elevation,
    shadowColor,
    shadowOpacity,
    shadowRadius,
    shadowOffset: { width, height },
  };
}

export default function boxShadow(properties) {
  const { shadow } = StyleSheet.create({
    shadow: createBoxShadowStyle(properties),
  });
  return shadow;
}
