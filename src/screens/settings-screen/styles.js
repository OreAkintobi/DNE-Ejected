import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;
export const MidText = styled.Text`
  font-family: ${theme.fonts.RobotoMedium};
`;
