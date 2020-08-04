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
});

const ForgotPasswordScreen = ({ navigation }) => {
  const { forgotPassword, state: authState } = useContext(AuthContext);

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
              headerText="Forgot Password?"
              buttonText="Reset Password"
              handlePress={() => navigation.navigate("ResetPasswordScreen")}
              alternativeSign2="Remember your password?"
              authType=" Sign in"
              handleScreenChange={() => navigation.navigate("LoginScreen")}
              children={
                <Formik
                  initialValues={{ email: "" }}
                  onSubmit={(values) => {
                    forgotPassword({ identifier: values.email });
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
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
