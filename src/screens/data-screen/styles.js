import styled from "styled-components/native";
import { theme } from "../../theme/types";
import applyScale from "../../utils/applyScale";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;

export const OptionBoxContainer = styled.View`
  height: 70px;
  width: 100%;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const OptionBox = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const OptionCaption = styled.Text`
  font-family: ${theme.fonts.RobotoMedium};
  text-align: center;
  font-size: 12px;
  line-height: 14px;
`;

export const PaymentContainer = styled.View`
  width: 90%;
`;

export const SelectorHeader = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: ${theme.fonts.RobotoMedium};
  text-transform: uppercase;
  font-size: 12px;
  line-height: 14px;
`;

export const PaymentOptionContainer = styled.View`
  margin-top: 5px;
  margin-bottom: 15px;
  height: 42px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const PaymentOptionButton = styled.TouchableOpacity`
  height: 28px;
  width: 38%;
  border-radius: 8px;
  border: 1px solid ${theme.colors.COLOR_WHITE};
  align-items: center;
  justify-content: center;
`;

export const PaymentOptionButtonText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  font-family: ${theme.fonts.RobotoMedium};
  text-transform: uppercase;
  color: ${theme.colors.DARK_TEXT};
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
