import React, { useContext } from "react";
import { ScrollView, Platform, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import SafeAreaView from "../../commons/safe-area-view";
import Header from "../../commons/header";
import AuthForm from "../../components/AuthForm";
import LoadingComponent from "../../components/LoadingComponent";
import { Context as AuthContext } from "../../store/auth-context";
import { Context as DataContext } from "../../store/data-context";
import { theme } from "../../theme/types";

import { Container, Button, ButtonText, ErrorText, Input } from "./styles";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Please enter a firstname"),
  lastname: Yup.string().required("Please enter a lastname"),
  othername: Yup.string(),
  email: Yup.string()
    .required("Please enter your email")
    .email("That doesn't look like an email."),
  phone: Yup.string()
    .required("Please enter your phone number")
    .min(11, "Please enter a complete phone number."),
});

const EditProfileScreen = ({ navigation }) => {
  const {
    state: { userData },
  } = useContext(DataContext);
  const { state: authState, editUser } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Header title="Edit Profile" headerLeft />
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
              noLogo
              headerText="Edit Profile"
              buttonText="Sign up"
              children={
                <Formik
                  enableReinitialize
                  initialValues={{
                    firstname: authState.user.firstname,
                    lastname: authState.user.lastname,
                    othername: authState.user.othername,
                    email: authState.user.email,
                    phone: authState.user.phone_number,
                  }}
                  onSubmit={(values) => {
                    editUser({
                      firstname: values.firstname,
                      othername: values.othername,
                      lastname: values.lastname,
                      email: values.email,
                      phone_number: values.phone,
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
                        autoCapitalize="words"
                        autoCorrect={false}
                        onChangeText={handleChange("firstname")}
                        onBlur={handleBlur("firstname")}
                        placeholder="Edit First Name"
                        value={values.firstname}
                      />
                      <ErrorText>{errors.firstname}</ErrorText>
                      <Input
                        autoCapitalize="words"
                        autoCorrect={false}
                        onChangeText={handleChange("lastname")}
                        onBlur={handleBlur("lastname")}
                        placeholder="Edit Last Name"
                        value={values.lastname}
                      />
                      <ErrorText>{errors.lastname}</ErrorText>
                      <Input
                        autoCapitalize="words"
                        autoCorrect={false}
                        onChangeText={handleChange("othername")}
                        onBlur={handleBlur("othername")}
                        placeholder="Edit Other Name"
                        value={values.othername}
                      />
                      <ErrorText>{errors.othername}</ErrorText>
                      <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        placeholder="Change Email"
                        value={values.email}
                      />
                      <ErrorText>{errors.email}</ErrorText>
                      <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handleChange("phone")}
                        onBlur={handleBlur("phone")}
                        placeholder="Change Phone Number"
                        value={values.phone}
                      />
                      <ErrorText>{errors.phone}</ErrorText>
                      <Button onPress={handleSubmit}>
                        {authState.isLoading ? (
                          <LoadingComponent color={theme.colors.COLOR_WHITE} />
                        ) : (
                          <ButtonText>Save Changes</ButtonText>
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

export default EditProfileScreen;
