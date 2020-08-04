import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const Container = styled.View`
  width: 100%;
  height: 37px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const LabelTextContainer = styled.View`
  height: 62px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const LabelText = styled.Text`
  font-family: ${theme.fonts.RobotoMedium};
  text-align: center;
  font-size: 12px;
  line-height: 14px;
`;

export const InputContainer = styled.View`
  height: 37px;
  width: 218px;
  justify-content: flex-end;
`;

export const Input = styled.TextInput`
  padding-left: 10px;
  padding-bottom: 5px;
  border-bottom-width: 1px;
`;

export const ErrorText = styled.Text`
  padding-left: 10px;
  font-size: 12px;
  width: 100%;
  color: red;
  font-family: ${theme.fonts.RobotoRegular};
  text-align: left;
`;
