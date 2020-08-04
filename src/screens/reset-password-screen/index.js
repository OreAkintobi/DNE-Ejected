import React, { useContext } from "react";
import { ScrollView, Platform, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import SafeAreaView from "../../commons/safe-area-view";
import LoadingComponent from "../../components/LoadingComponent";
import AuthForm from "../../components/AuthForm";
import { Context as AuthContext } from "../../store/auth-context";
import { theme } from "../../theme/types";

import { Container, Input, Button, ButtonText, ErrorText } from "./styles";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Enter a valid email or phone number"),
  token: Yup.string()
    .required("Token is required")
    .min(6, "Please enter a token with at least 6 digits."),
  newPassword: Yup.string()
    .required("Please enter your new password")
    .min(2, "Pretty sure this is too short."),
  confirmNewPassword: Yup.string()
    .required("Please confirm new password")
    .min(2, "Pretty sure this is too short.")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

const ResetPasswordScreen = ({ navigation }) => {
  const { resetPassword, state: authState } = useContext(AuthContext);

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
              headerText="Reset Password"
              handleScreenChange={() => navigation.navigate("LoginScreen")}
              children={
                <Formik
                  initialValues={{
                    email: "",
                    token: "",
                    newPassword: "",
                    confirmNewPassword: "",
                  }}
                  onSubmit={(values) => {
                    resetPassword({
                      identifier: values.email,
                      token: values.token,
                      password: values.newPassword,
                    });
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
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        placeholder="Enter email"
                        value={values.email}
                      />
                      <ErrorText>{errors.email}</ErrorText>
                      <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handleChange("token")}
                        onBlur={handleBlur("token")}
                        placeholder="Enter token"
                        value={values.token}
                      />
                      <ErrorText>{errors.token}</ErrorText>
                      <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handleChange("newPassword")}
                        onBlur={handleBlur("newPassword")}
                        placeholder="Enter New Password"
                        value={values.newPassword}
                        secureTextEntry
                      />
                      <ErrorText>{errors.newPassword}</ErrorText>
                      <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handleChange("confirmNewPassword")}
                        onBlur={handleBlur("confirmNewPassword")}
                        placeholder="Confirm New Password"
                        value={values.confirmNewPassword}
                        secureTextEntry
                      />
                      <ErrorText>{errors.confirmNewPassword}</ErrorText>
                      <Button onPress={handleSubmit}>
                        {authState.isLoading ? (
                          <LoadingComponent color={theme.colors.COLOR_WHITE} />
                        ) : (
                          <ButtonText>Reset Password</ButtonText>
                        )}
                      </Button>
                    </>
                  )}
                </Formik>
              }
            />
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Container>
          <AuthForm
            headerText="Reset Password"
            handleScreenChange={() => navigation.navigate("LoginScreen")}
            children={
              <Formik
                initialValues={{
                  email: "",
                  token: "",
                  newPassword: "",
                  confirmNewPassword: "",
                }}
                onSubmit={(values) => {
                  resetPassword({
                    identifier: values.email,
                    token: values.token,
                    password: values.newPassword,
                  });
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
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      placeholder="Enter email"
                      value={values.email}
                    />
                    <ErrorText>{errors.email}</ErrorText>
                    <Input
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={handleChange("token")}
                      onBlur={handleBlur("token")}
                      placeholder="Enter token"
                      value={values.token}
                    />
                    <ErrorText>{errors.token}</ErrorText>
                    <Input
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={handleChange("newPassword")}
                      onBlur={handleBlur("newPassword")}
                      placeholder="Enter New Password"
                      value={values.newPassword}
                      secureTextEntry
                    />
                    <ErrorText>{errors.newPassword}</ErrorText>
                    <Input
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={handleChange("confirmNewPassword")}
                      onBlur={handleBlur("confirmNewPassword")}
                      placeholder="Confirm New Password"
                      value={values.confirmNewPassword}
                      secureTextEntry
                    />
                    <ErrorText>{errors.confirmNewPassword}</ErrorText>
                    <Button onPress={handleSubmit}>
                      {authState.isLoading ? (
                        <LoadingComponent color={theme.colors.COLOR_WHITE} />
                      ) : (
                        <ButtonText>Reset Password</ButtonText>
                      )}
                    </Button>
                  </>
                )}
              </Formik>
            }
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
