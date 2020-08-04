import React, { useState } from "react";
import {
  Container,
  Input,
  InputContainer,
  LabelText,
  LabelTextContainer,
  ErrorText,
} from "./styles";

const SelectorInput = ({
  labelTextUpper,
  labelTextCenter,
  labelTextLower,
  selectorInputPlaceholder,
  keyboardType,
  value,
  onChangeText,
  secureTextEntry,
  errorText,
}) => {
  return (
    <>
      <Container>
        <LabelTextContainer>
          {labelTextUpper ? <LabelText>{labelTextUpper}</LabelText> : null}
          {labelTextCenter ? (
            <LabelText style={{ fontSize: 16, lineHeight: 19 }}>
              {labelTextCenter}
            </LabelText>
          ) : null}
          {labelTextLower ? <LabelText>{labelTextLower}</LabelText> : null}
        </LabelTextContainer>
        <InputContainer>
          <Input
            placeholder={selectorInputPlaceholder}
            value={value}
            onChangeText={onChangeText}
            autoCorrect={false}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
          />

          <ErrorText>{errorText}</ErrorText>
        </InputContainer>
      </Container>
    </>
  );
};

export default SelectorInput;
