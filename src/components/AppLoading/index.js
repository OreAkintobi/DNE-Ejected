import React from "react";
import { Image } from "react-native";
import { AppLoading as ExpoAppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

export default function AppLoading({ setIsAppReady }) {
  const cacheImages = (images) => {
    return images.map((image) => {
      return typeof image === "string"
        ? Image.prefetch(image)
        : Asset.fromModule(image).downloadAsync();
    });
  };

  const cacheFonts = (fonts) => {
    return fonts.map((font) => Font.loadAsync(font));
  };

  const loadAllAppAssets = async () => {
    const imageAssets = cacheImages([require("../../../assets/icon.png")]);

    const fontAssets = cacheFonts([
      {
        "Roboto-Black": require("../../../assets/fonts/Roboto-Black.ttf"),
      },
      {
        "Roboto-BlackItalic": require("../../../assets/fonts/Roboto-BlackItalic.ttf"),
      },
      {
        "Roboto-Bold": require("../../../assets/fonts/Roboto-Bold.ttf"),
      },
      {
        "Roboto-BoldItalic": require("../../../assets/fonts/Roboto-BoldItalic.ttf"),
      },
      {
        "Roboto-Italic": require("../../../assets/fonts/Roboto-Italic.ttf"),
      },
      {
        "Roboto-Light": require("../../../assets/fonts/Roboto-Light.ttf"),
      },
      {
        "Roboto-LightItalic": require("../../../assets/fonts/Roboto-LightItalic.ttf"),
      },
      {
        "Roboto-Medium": require("../../../assets/fonts/Roboto-Medium.ttf"),
      },
      {
        "Roboto-MediumItalic": require("../../../assets/fonts/Roboto-MediumItalic.ttf"),
      },
      {
        "Roboto-Regular": require("../../../assets/fonts/Roboto-Regular.ttf"),
      },
      {
        "Roboto-Thin": require("../../../assets/fonts/Roboto-Thin.ttf"),
      },
      {
        "Roboto-ThinItalic": require("../../../assets/fonts/Roboto-ThinItalic.ttf"),
      },
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return (
    <ExpoAppLoading
      startAsync={loadAllAppAssets}
      onFinish={() => setIsAppReady(true)}
      onError={console.warn}
    />
  );
}
