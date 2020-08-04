import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Platform, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import SafeAreaView from "../../commons/safe-area-view";
import { Context as AuthContext } from "../../store/auth-context";
import AuthForm from "../../components/AuthForm";
import LoadingComponent from "../../components/LoadingComponent";
import { theme } from "../../theme/types";

import { Container, Input, Button, ButtonText, ErrorText } from "./styles";
import APIModal from "../../components/APIModal";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Please enter your name."),
  email: Yup.string()
    .required("Please enter your email")
    .email("That doesn't look like an email"),
  phone: Yup.string()
    .required("Please enter your phone number")
    .min(11, "Please enter a complete phone number"),
  password: Yup.string()
    .required("Please enter your password")
    .min(6, "This password is too short"),
  confirmPassword: Yup.string()
    .required("Please confirm password")
    .min(6, "This password is too short")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignupScreen = ({ navigation }) => {
  const { signup, state: authState } = useContext(AuthContext);

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
              headerText="Create your account"
              buttonText="Sign up"
              alternativeSign2="Already have an account?"
              authType=" Sign in"
              handleScreenChange={() => navigation.navigate("LoginScreen")}
              children={
                <Formik
                  initialValues={{
                    fullname: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirmPassword: "",
                  }}
                  onSubmit={(values) => {
                    signup({
                      name: values.fullname,
                      email: values.email,
                      phone_number: values.phone,
                      password: values.password,
                    });
                    setIsVisible(true);
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
                        autoCapitalize="words"
                        autoCorrect={false}
                        onChangeText={handleChange("fullname")}
                        onBlur={handleBlur("fullname")}
                        placeholder="Enter Full Name"
                        value={values.fullname}
                      />
                      <ErrorText>{errors.fullname}</ErrorText>
                      <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        placeholder="Enter Email"
                        keyboardType="email-address"
                        value={values.email}
                      />
                      <ErrorText>{errors.email}</ErrorText>
                      <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handleChange("phone")}
                        onBlur={handleBlur("phone")}
                        placeholder="Enter Phone Number"
                        keyboardType="phone-pad"
                        value={values.phone}
                      />
                      <ErrorText>{errors.phone}</ErrorText>
                      <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        placeholder="Enter Password"
                        value={values.password}
                        secureTextEntry
                      />
                      <ErrorText>{errors.password}</ErrorText>
                      <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        secureTextEntry
                      />
                      <ErrorText>{errors.confirmPassword}</ErrorText>
                      <Button onPress={handleSubmit}>
                        {authState.isLoading ? (
                          <LoadingComponent color={theme.colors.COLOR_WHITE} />
                        ) : (
                          <ButtonText>Sign Up</ButtonText>
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

export default SignupScreen;
