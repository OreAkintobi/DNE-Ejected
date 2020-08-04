import styled from "styled-components/native";
import { theme } from "../../theme/types";
import applyScale from "../../utils/applyScale";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;

export const TopContainer = styled.View`
  width: 80%;
  margin-top: ${applyScale(20)}px;
  margin-bottom: ${applyScale(20)}px;
  height: ${applyScale(60)}px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.DARK_TEXT};
`;

export const DetailContainer = styled.View`
  padding-top: ${applyScale(10)}px;
  margin-top: ${applyScale(5)}px;
  margin-bottom: ${applyScale(5)}px;
  height: ${applyScale(30)}px;
  width: 80%;
  flex-direction: row;
`;

export const LabelText = styled.Text`
  height: ${applyScale(20)}px;
  width: 50%;
  font-family: ${theme.fonts.RobotoBold};
  font-size: ${applyScale(14)}px;
  line-height: ${applyScale(16)}px;
  text-transform: uppercase;
  text-align: left;
`;

export const DetailText = styled.Text`
  height: ${applyScale(20)}px;
  width: 50%;
  font-family: ${theme.fonts.RobotoRegular};
  font-size: ${applyScale(14)}px;
  line-height: ${applyScale(16)}px;
  text-align: left;
`;

export const BodyContainer = styled.View`
  width: 90%;
`;

export const HeaderText = styled.Text`
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 28px;
  align-self: flex-start;
  font-family: ${theme.fonts.RobotoMedium};
`;
