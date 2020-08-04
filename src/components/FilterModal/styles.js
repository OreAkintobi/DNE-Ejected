import styled from "styled-components/native";
import { theme } from "../../theme/types";
import applyScale from "../../utils/applyScale";

export const ModalView = styled.View`
  background-color: ${theme.colors.COLOR_WHITE};
  height: 85%;
  width: 70%;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
`;

export const FilterView = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 100px;
`;

export const ModalButton = styled.TouchableOpacity`
  height: ${applyScale(35)}px;
  width: 30%;
  margin: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1.5px solid ${theme.colors.DARK_TEXT};
`;

export const ModalButtonText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  font-family: ${theme.fonts.RobotoBold};
  color: ${theme.colors.DARK_TEXT};
`;

export const ButtonsContainer = styled.View`
  align-self: flex-end;
  border-top-color: ${theme.colors.DARK_TEXT};
  border-top-width: 1px;
  height: ${applyScale(52)}px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  /* margin-top: 5px; */
`;

export const SelectorHeader = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 15px;
  font-family: ${theme.fonts.RobotoMedium};
  align-self: flex-start;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 14px;
`;

export const SelectorContainer = styled.View`
  margin-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  height: ${applyScale(63)}px;
  width: 90%;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.LIGHT_GRAY};
`;

export const FilterInput = styled.TextInput`
  height: ${applyScale(45)}px;
  /* border: 1.5px solid ${theme.colors.DARK_TEXT}; */
  padding-left:10px;
  padding-right:10px;
  width: 215px;
  border-radius: 8px;
  background-color: #fafafa;
`;
