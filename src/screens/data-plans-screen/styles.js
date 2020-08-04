import styled from "styled-components/native";
import { theme } from "../../theme/types";
import applyScale from "../../utils/applyScale";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;

export const OptionBoxContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 15px;
  height: 70px;
  flex-direction: column;
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

export const TableHeadingContainer = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;

export const TableHeadingText = styled.Text`
  margin-top: 10px;
  font-size: ${applyScale(14)}px;
  line-height: ${applyScale(16)}px;
  font-family: ${theme.fonts.RobotoMedium};
  color: ${theme.colors.DARK_TEXT};
  text-transform: uppercase;
`;

export const TableContainer = styled.View`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

export const TableBody = styled.View``;

export const TableRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TableText = styled.Text`
  font-size: ${applyScale(16)}px;
  line-height: ${applyScale(18)}px;
  font-family: ${theme.fonts.RobotoRegular};
  color: ${theme.colors.DARK_TEXT};
  text-transform: uppercase;
`;

export const TableLabel = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 50%;
`;

export const TableTouchable = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 26px;
  width: 25%;
  padding: 7px;
  margin: 3px;
  border-radius: 6px;
`;
