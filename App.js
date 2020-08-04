import React, { useState, useEffect } from "react";
import { Provider as AuthProvider } from "./src/store/auth-context";
import { Provider as DataProvider } from "./src/store/data-context";
import { NetworkProvider } from "react-native-offline";
import AppRouter from "./src";
import { useFonts } from "@use-expo/font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const [isLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
  });

  useEffect(() => {
    const showSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    showSplashScreen();
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
      setIsReady(true);
    }, 2000);
  }, [isReady]);

  if (!isReady) return null;

  return (
    <NetworkProvider>
      <AuthProvider>
        <DataProvider>
          <AppRouter />
        </DataProvider>
      </AuthProvider>
    </NetworkProvider>
  );
}
