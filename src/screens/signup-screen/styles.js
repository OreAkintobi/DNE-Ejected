import styled from "styled-components/native";
import { theme } from "../../theme/types";
import applyScale from "../../utils/applyScale";

export const Container = styled.View`
  flex: 1;
  margin-top: ${applyScale(20)}px;
  justify-content: flex-start;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;

export const Input = styled.TextInput`
  margin-top: ${applyScale(10)}px;
  margin-bottom: ${applyScale(10)}px;
  padding-left: 10px;
  height: ${applyScale(60)}px;
  width: 100%;
  align-self: flex-start;
  border: 1px solid ${theme.colors.DARK_COLOR_LOW_OPACITY};
  box-shadow: 0px 0px 4px rgba(50, 107, 216, 0.25);
  font-family: ${theme.fonts.RobotoRegular};
`;

export const Button = styled.TouchableOpacity`
  margin-top: ${applyScale(10)}px;
  margin-bottom: ${applyScale(10)}px;
  padding-left: 10px;
  height: ${applyScale(60)}px;
  width: 100%;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.DARK_TEXT};
  box-shadow: 0px 0px 4px rgba(50, 107, 216, 0.25);
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.COLOR_WHITE};
  font-family: ${theme.fonts.RobotoRegular};
  font-size: 24px;
  line-height: 28px;
`;

export const ErrorText = styled.Text`
  width: 100%;
  color: red;
  font-family: ${theme.fonts.RobotoRegular};
  text-align: left;
`;
