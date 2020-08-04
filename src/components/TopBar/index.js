import React, { useState } from "react";
import Logo from "../../commons/logo";
import { theme } from "../../theme/types";
import WalletIconSmall from "../../../assets/icons/Small/WalletIconSmall";

import {
  Container,
  BarItemsContainer,
  LeftContainer,
  BarText,
  Action,
} from "./styles";

const TopBar = ({
  background,
  icon,
  handleInstruction,
  child,
  textColor,
  captionText,
}) => {
  return (
    <>
      <Container style={{ backgroundColor: background }}>
        <BarItemsContainer>
          <LeftContainer>
            {icon}
            <BarText style={{ color: textColor }}>{captionText}</BarText>
          </LeftContainer>
          <Action onPress={handleInstruction}>{child}</Action>
        </BarItemsContainer>
      </Container>
    </>
  );
};

export default TopBar;
