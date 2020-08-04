import React, { useContext, useState, useEffect } from "react";
import { ScrollView, Platform, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import SafeAreaView from "../../commons/safe-area-view";
import LoadingComponent from "../../components/LoadingComponent";
import AuthForm from "../../components/AuthForm";
import { Context as AuthContext } from "../../store/auth-context";
import { theme } from "../../theme/types";
import APIModal from "../../components/APIModal";

import { Container, Input, Button, ButtonText, ErrorText } from "./styles";

const validationSchema = Yup.object().shape({
  identifier: Yup.string().required("Please enter your email or phone number"),
  password: Yup.string()
    .required("Required")
    .min(6, "This password is too short"),
});

const LoginScreen = ({ navigation }) => {
  const { state: authState, signin } = useContext(AuthContext);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeOutHandler = null;

    if (!authState.isLoading) {
      timeOutHandler = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }

    if (authState.status === "success") {
      navigation.navigate("HomeScreen");
    }

    return () => clearTimeout(timeOutHandler);
  }, [authState.isLoading, authState.status]);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <Container>
            <AuthForm
              headerText="Login to your Account"
              buttonText="Sign in"
              forgotPassword="Forgot password?"
              handleForgotButton={() =>
                navigation.navigate("ForgotPasswordScreen")
              }
              alternativeSign2="Don't have an account?"
              authType=" Sign up"
              handleScreenChange={() => navigation.navigate("SignupScreen")}
              children={
                <Formik
                  initialValues={{ identifier: "", password: "" }}
                  onSubmit={(values, { resetForm }) => {
                    signin({
                      identifier: values.identifier,
                      password: values.password,
                    });
                    setIsVisible(true);
                    resetForm({ values: "" });
                  }}
                  validationSchema={validationSchema}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                  }) => (
                    <>
                      <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handleChange("identifier")}
                        onBlur={handleBlur("identifier")}
                        placeholder="Enter your email or phone number"
                        value={values.identifier}
                      />
                      <ErrorText>{errors.identifier}</ErrorText>
                      <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        placeholder="Enter your password"
                        value={values.password}
                        secureTextEntry
                      />
                      <ErrorText>{errors.password}</ErrorText>
                      <Button onPress={handleSubmit}>
                        {authState.isLoading ? (
                          <LoadingComponent color={theme.colors.COLOR_WHITE} />
                        ) : (
                          <ButtonText>Sign In</ButtonText>
                        )}
                      </Button>
                    </>
                  )}
                </Formik>
              }
            />
          </Container>
          <APIModal state={authState} isVisible={isVisible} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
