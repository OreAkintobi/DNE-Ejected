import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const Container = styled.View`
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const BarItemsContainer = styled.View`
  width: 90%;
  height: 21px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const LeftContainer = styled.View`
  width: 120px;
  align-items: flex-end;
  flex-direction: row;
`;

export const BarText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  font-family: ${theme.fonts.RobotoBold};
  margin-left: 10px;
`;

export const Action = styled.TouchableOpacity``;
