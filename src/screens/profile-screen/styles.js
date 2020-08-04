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

export const TopContainer = styled.View`
  width: 90%;
  margin-top: ${applyScale(20)}px;
  margin-bottom: ${applyScale(20)}px;
  height: ${applyScale(60)}px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
`;

export const DetailContainer = styled.View`
  padding-top: ${applyScale(10)}px;
  margin-top: ${applyScale(10)}px;
  margin-bottom: ${applyScale(10)}px;
  height: ${applyScale(40)}px;
  width: 90%;
  flex-direction: row;
`;

export const LabelText = styled.Text`
  height: ${applyScale(40)}px;
  width: 35%;
  font-family: ${theme.fonts.RobotoBold};
  font-size: ${applyScale(16)}px;
  line-height: ${applyScale(18)}px;
  text-transform: uppercase;
  text-align: left;
`;

export const DetailText = styled.Text`
  height: ${applyScale(30)}px;
  width: 65%;
  font-family: ${theme.fonts.RobotoRegular};
  font-size: ${applyScale(16)}px;
  line-height: ${applyScale(18)}px;
  text-align: left;
`;

export const ThemeContainer = styled.View`
  height: ${applyScale(40)}px;
  width: 65%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const ThemeButton = styled.TouchableOpacity`
  height: ${applyScale(35)}px;
  width: ${applyScale(35)}px;
  border-radius: 35px;
`;

export const ThemeSelect = styled.View`
  height: ${applyScale(35)}px;
  width: ${applyScale(35)}px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`;

export const EditButton = styled.TouchableOpacity`
  padding-top: ${applyScale(10)}px;
  padding-bottom: ${applyScale(10)}px;
  margin-top: ${applyScale(10)}px;
  margin-bottom: ${applyScale(10)}px;
  height: ${applyScale(50)}px;
  align-items: center;
  justify-content: center;
`;

export const EditButtonText = styled.Text`
  font-family: ${theme.fonts.RobotoMedium};
  font-size: ${applyScale(16)}px;
  line-height: ${applyScale(18)}px;
  text-transform: uppercase;
`;
