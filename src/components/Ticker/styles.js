import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const Container = styled.TouchableOpacity`
  margin-top: 15px;
  width: 90%;
  height: 74px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.DARK_COLOR_LOW_OPACITY};
`;

export const TransactionType = styled.View`
  height: 74px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const TransactionDetailsContainer = styled.View`
  height: 74px;
  width: 120px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const TransactionTypeText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  font-family: ${theme.fonts.RobotoMedium};
  color: ${theme.colors.DARK_TEXT};
  text-transform: uppercase;
`;

export const TransactionDate = styled.Text`
  font-size: 8px;
  line-height: 9px;
  font-family: ${theme.fonts.RobotoRegular};
  color: ${theme.colors.DARK_TEXT};
  text-transform: capitalize;
`;

export const TransactionAmountContainer = styled.View`
  height: 74px;
  width: 100px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
`;
