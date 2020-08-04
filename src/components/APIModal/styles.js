import styled from "styled-components/native";
import { theme } from "../../theme/types";
import applyScale from "../../utils/applyScale";

export const ModalView = styled.View`
  background-color: ${theme.colors.COLOR_WHITE};
  height: 70%;
  width: 70%;
  align-items: center;
  justify-content: center;
`;

export const ModalText = styled.Text`
  margin-top: ${applyScale(20)}px;
  font-size: 18px;
  line-height: 21px;
  text-transform: capitalize;
  font-family: ${theme.fonts.RobotoRegular};
  color: ${theme.colors.DARK_GRAY};
`;
