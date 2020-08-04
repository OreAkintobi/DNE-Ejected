import styled from "styled-components/native";
import { theme } from "../../theme/types";
import applyScale from "../../utils/applyScale";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
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

export const WalletText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  font-family: ${theme.fonts.RobotoBold};
  color: ${theme.colors.COLOR_WHITE};
`;

export const SeeMoreButton = styled.TouchableOpacity`
  margin-top: 30px;
  height: 44px;
  width: 60%;
  border: 1px solid ${theme.colors.DARK_TEXT};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const SeeMoreText = styled.Text`
  font-size: 18px;
  line-height: 19px;
  font-family: ${theme.fonts.RobotoRegular};
  color: ${theme.colors.DARK_TEXT};
`;
