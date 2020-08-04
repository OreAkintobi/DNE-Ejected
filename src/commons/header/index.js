import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../theme/types";
import boxShadow from "../../utils/boxShadows";
import BackButtonIcon from "../../../assets/icons/Small/BackButtonIcon";
import { Context as AuthContext } from "../../store/auth-context";
import { Context as DataContext } from "../../store/data-context";

import {
  Container,
  HeaderLeft,
  HeaderRight,
  HeaderBackTitle,
  HeaderName,
  HeaderTitleContainer,
  BackButtonTouchable,
} from "./styles";

export default function Header(props) {
  const { colors } = theme;
  const navigation = useNavigation();
  const { state: authState } = useContext(AuthContext);
  const { state: dataState } = useContext(DataContext);

  const {
    title,
    style,
    headerBackTitleVisible,
    headerLeftContainerStyle,
    headerRightContainerStyle,
    functionPassDown,
  } = props;

  return (
    <>
      <Container
        style={[
          boxShadow({ elevation: 0, shadowColor: colors.DARK_TEXT }),
          { ...style, backgroundColor: dataState.theme.primary },
        ]}
      >
        {props.headerLeft ? (
          <HeaderLeft style={headerLeftContainerStyle}>
            <BackButtonTouchable
              onPress={() => {
                navigation.goBack();
              }}
            >
              <BackButtonIcon backgroundColor={colors.COLOR_WHITE} />
            </BackButtonTouchable>
            {headerBackTitleVisible && <HeaderBackTitle>back</HeaderBackTitle>}
          </HeaderLeft>
        ) : null}

        <HeaderTitleContainer style={{ marginLeft: props.headerLeft ? 0 : 20 }}>
          <HeaderName style={{ color: colors.COLOR_WHITE }}>{title}</HeaderName>
        </HeaderTitleContainer>

        <HeaderRight style={headerRightContainerStyle}>
          {props.headerRight ? (
            <BackButtonTouchable onPress={functionPassDown}>
              <props.headerRight />
            </BackButtonTouchable>
          ) : null}
        </HeaderRight>
      </Container>
    </>
  );
}
