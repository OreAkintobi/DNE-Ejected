import styled from "styled-components/native";
import { theme } from "../../theme/types";
import applyScale from "../../utils/applyScale";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const TopContainer = styled.View`
  height: ${applyScale(308)}px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.Text`
  color: ${theme.colors.COLOR_WHITE};
  font-family: ${theme.fonts.RobotoRegular};
  font-size: 52px;
  line-height: 61px;
  /* width: 90%; */
  /* margin-top: 20px;
  margin-bottom: 10px; */
`;

export const MidText = styled.Text`
  color: ${theme.colors.DARK_TEXT};
  font-family: ${theme.fonts.RobotoRegular};
  font-size: 18px;
  line-height: 21px;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ContactTextContainer = styled.View`
  width: 90%;
  margin-top: 5px;
  flex-direction: row;
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.DARK_TEXT};
`;

export const ContactText = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${theme.colors.BLUE_LINK_TEXT};
  font-family: ${theme.fonts.RobotoMedium};
  font-size: 13px;
  line-height: 13px;
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.DARK_TEXT};
`;

export const ContactTouchable = styled.TouchableOpacity``;
