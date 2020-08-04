import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;

export const BottomTextContainer = styled.View`
  position: absolute;
  height: 28px;
  bottom: 20px;
  align-items: center;
  flex-direction: row;
`;

export const BottomText = styled.Text`
  font-family: ${theme.fonts.RobotoRegular};
  font-size: 12px;
  line-height: 14px;
`;

export const BottomText2 = styled.Text`
  font-family: ${theme.fonts.RobotoBold};
  font-size: 12px;
  line-height: 14px;
`;

export const DividerText = styled.Text`
  font-family: ${theme.fonts.RobotoRegular};
  font-size: 24px;
  line-height: 28px;
`;
