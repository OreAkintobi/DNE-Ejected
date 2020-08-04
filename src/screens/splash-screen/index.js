import React, { useEffect } from "react";
import Logo from "../../commons/logo";

import { Container } from "./styles";
import SafeAreaView from "../../commons/safe-area-view";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => checkInitialLaunch(), 1000);
  }, []);

  const checkInitialLaunch = async () => {
    // do checks here for initial launch and subsequent launch
    navigation.replace("ConfigScreen");
  };

  return (
    <SafeAreaView>
      <Container>
        <Logo />
      </Container>
    </SafeAreaView>
  );
}
