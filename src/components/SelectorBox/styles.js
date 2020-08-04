import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const OperatorContainer = styled.View`
  width: 90%;
  margin-bottom: 15px;
`;

export const SelectorHeader = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: ${theme.fonts.RobotoMedium};
  text-align: left;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 14px;
`;

export const SelectorContainer = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  height: 97px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${theme.colors.LIGHT_GRAY};
`;
