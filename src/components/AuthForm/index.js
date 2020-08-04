import React from "react";
import Logo from "../../commons/logo";
import { theme } from "../../theme/types";

import {
  LogoContainer,
  LoginBodyContainer,
  LoginHeaderText,
  ForgotPassword,
  ForgotPasswordText,
  AlternativeSign,
  Alternative,
} from "./styles";

const AuthForm = ({
  noLogo,
  headerText,
  forgotPassword,
  alternativeSign2,
  authType,
  handleForgotButton,
  handleScreenChange,
  children,
}) => {
  const { colors } = theme;

  return (
    <>
      {noLogo ? null : (
        <LogoContainer>
          <Logo />
        </LogoContainer>
      )}
      <LoginBodyContainer>
        <LoginHeaderText>{headerText}</LoginHeaderText>
        {children}
        {forgotPassword ? (
          <ForgotPassword style={{ alignSelf: "flex-end" }}>
            <ForgotPasswordText onPress={handleForgotButton}>
              {forgotPassword}
            </ForgotPasswordText>
          </ForgotPassword>
        ) : null}
        <Alternative>
          <AlternativeSign>{alternativeSign2}</AlternativeSign>
          <AlternativeSign
            onPress={handleScreenChange}
            style={{ color: colors.BLUE_LINK_TEXT }}
          >
            {authType}
          </AlternativeSign>
        </Alternative>
      </LoginBodyContainer>
    </>
  );
};

export default AuthForm;
