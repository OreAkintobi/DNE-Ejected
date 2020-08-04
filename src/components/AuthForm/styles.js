import styled from "styled-components/native";
import { theme } from "../../theme/types";
import applyScale from "../../utils/applyScale";

export const LogoContainer = styled.View`
  height: ${applyScale(180)}px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;

export const LoginBodyContainer = styled.View`
  width: 80%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;

export const LoginHeaderText = styled.Text`
  font-family: ${theme.fonts.RobotoRegular};
  font-size: 24px;
  align-self: flex-start;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  color: ${theme.colors.BLUE_LINK_TEXT};
  font-family: ${theme.fonts.RobotoRegular};
  font-size: 14px;
  line-height: 16px;
`;

export const AlternativeSign = styled.Text`
  color: ${theme.colors.DARK_GRAY};
  font-family: ${theme.fonts.RobotoRegular};
  font-size: 20px;
  line-height: 23px;
  margin-bottom: ${applyScale(5)}px;
  margin-top: ${applyScale(10)}px;
`;

export const Alternative = styled.View`
  flex-direction: row;
  margin-top: ${applyScale(50)}px;
  margin-bottom: ${applyScale(50)}px;
`;
