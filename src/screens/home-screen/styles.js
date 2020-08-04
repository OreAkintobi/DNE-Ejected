import styled from "styled-components/native";
import { theme } from "../../theme/types";
import applyScale from "../../utils/applyScale";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const BankDetailsContainer = styled.View`
  width: 90%;
  margin-top: ${applyScale(20)}px;
  height: 145px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const DetailContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const DetailText = styled.Text`
  margin-left: ${applyScale(10)}px;
  font-size: 14px;
  line-height: 16px;
  text-transform: capitalize;
  font-family: ${theme.fonts.RobotoRegular};
  color: ${theme.colors.DARK_TEXT};
`;

export const ActivitiesContainer = styled.View`
  margin-top: ${applyScale(30)}px;
  height: ${applyScale(224)}px;
  width: 100%;
  border-radius: 25px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;

export const Activity = styled.View`
  width: 96px;
  height: 83px;
  margin-top: 5px;
  margin-bottom: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ActivitySelector = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  align-items: center;
  justify-content: center;
`;

export const ActivityCaption = styled.Text`
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-transform: capitalize;
  font-family: ${theme.fonts.RobotoRegular};
  color: ${theme.colors.DARK_TEXT};
`;

export const NotificationSpace = styled.TouchableOpacity`
  width: 90%;
  margin-top: 10px;
  margin-left: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  flex-direction: row;
  border-radius: 5px;
`;

export const NotificationText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  width: 80%;
  text-align: center;
  font-family: ${theme.fonts.RobotoRegular};
  color: ${theme.colors.DARK_TEXT};
`;

export const TextTouchable = styled.TouchableOpacity``;

export const WalletText = styled.Text`
  font-size: 16px;
  line-height: 18px;
  font-family: ${theme.fonts.RobotoBold};
  color: ${theme.colors.COLOR_WHITE};
`;

export const WalletView = styled.View`
  flex-direction: row;
`;
