import React, { useEffect } from "react";
import SafeAreaView from "../../commons/safe-area-view";
import Logo from "../../commons/logo";

import {
  Container,
  BottomTextContainer,
  BottomText,
  BottomText2,
  DividerText,
} from "./styles";

export default function ConfigScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => checkInitialLaunch(), 1000);
  }, []);

  const checkInitialLaunch = async () => {
    // do checks here for initial launch and subsequent launch
    navigation.replace("HomeScreen");
  };

  return (
    <SafeAreaView>
      <Container>
        <Logo />
        <BottomTextContainer>
          <BottomText>Powered by</BottomText>
          <DividerText> | </DividerText>
          <BottomText2>SystemsTech</BottomText2>
        </BottomTextContainer>
      </Container>
    </SafeAreaView>
  );
}
