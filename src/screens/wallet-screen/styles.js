import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;

export const BodyContainer = styled.View`
  width: 90%;
`;

export const PaymentButton = styled.TouchableOpacity`
  width: 90%;
  margin-top: 5px;
  margin-bottom: 15px;
  height: 42px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const PayText = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 16px;
  font-family: ${theme.fonts.RobotoMedium};
  color: ${theme.colors.COLOR_WHITE};
  text-transform: uppercase;
`;

export const SelectorHeader = styled.Text`
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: ${theme.fonts.RobotoMedium};
  text-transform: uppercase;
  font-size: 12px;
  line-height: 14px;
`;

export const ErrorText = styled.Text`
  width: 100%;
  color: red;
  font-family: ${theme.fonts.RobotoRegular};
  text-align: left;
`;
