import React, { useState, useContext, useEffect } from "react";
import {
  ScrollView,
  Platform,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { theme } from "../../theme/types";
import SafeAreaView from "../../commons/safe-area-view";
import Header from "../../commons/header";
import SelectorBox from "../../components/SelectorBox";
import SelectorInput from "../../components/SelectorInput";
import { Context as DataContext } from "../../store/data-context";
import { Context as AuthContext } from "../../store/auth-context";
import APIModal from "../../components/APIModal";
import LoadingComponent from "../../components/LoadingComponent";
import etisalat from "../../../assets/icons/NetworkIcons/9mobile.png";
import airtel from "../../../assets/icons/NetworkIcons/airtel.png";
import glo from "../../../assets/icons/NetworkIcons/glo.png";
import mtn from "../../../assets/icons/NetworkIcons/mtn.png";

import {
  Container,
  OptionBoxContainer,
  OptionBox,
  OptionCaption,
  PaymentContainer,
  SelectorHeader,
  PaymentOptionContainer,
  PaymentButton,
  PayText,
  PaymentOptionButton,
  PaymentOptionButtonText,
} from "./styles";

const validationSchema = Yup.object().shape({
  phone_number: Yup.string()
    .required("Phone number is required")
    .min(11, "Please enter a complete phone number."),
  password: Yup.string(),
  email: Yup.string(),
});

const DataScreen = ({ route, navigation }) => {
  const {
    id,
    carrier,
    planName,
    walletPrice,
    atmPrice,
    paymentOption,
  } = route.params;
  const { colors, fonts } = theme;
  const { state: dataState, dataPurchase } = useContext(DataContext);
  const { state: authState } = useContext(AuthContext);
  const buttons = ["Wallet", "ATM"];
  const [selectedOption, setSelectedOption] = useState(paymentOption);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeOutHandler = null;

    if (!dataState.isLoading) {
      timeOutHandler = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }

    return () => clearTimeout(timeOutHandler);
  }, [dataState.isLoading, dataState.status]);

  const formatAmount = (amount) =>
    parseFloat(amount).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <SafeAreaView>
      <Header title="Data Purchase" headerLeft />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 25,
          }}
        >
          <Container>
            <SelectorBox
              operatorHeader="carrier"
              children={
                <OptionBoxContainer>
                  <OptionBox>
                    <Image
                      source={
                        carrier === "MTN"
                          ? mtn
                          : carrier === "GLO"
                          ? glo
                          : carrier === "AIRTEL"
                          ? airtel
                          : etisalat
                      }
                      style={{ height: 55, width: 55 }}
                    />
                  </OptionBox>
                  <OptionCaption>{carrier}</OptionCaption>
                </OptionBoxContainer>
              }
            />

            <PaymentContainer
              style={{ flexDirection: "row", marginTop: 15, marginBottom: 25 }}
            >
              <OptionCaption
                style={{
                  fontSize: 14,
                  lineHeight: 16,
                  fontFamily: fonts.RobotoBold,
                }}
              >
                DATA PLAN
              </OptionCaption>
              <OptionCaption
                style={{ fontSize: 14, lineHeight: 16, width: "70%" }}
              >
                {planName}
              </OptionCaption>
            </PaymentContainer>

            <Formik
              initialValues={{
                phone_number: "",
                password: "",
                email: "",
              }}
              onSubmit={(values) => {
                // console.log({
                //   type: selectedOption,
                //   source:
                //     Platform.OS === "android"
                //       ? "ANDROID"
                //       : Platform.OS === "ios"
                //       ? "IOS"
                //       : "WEB",
                //   phone_number: values.phone_number,
                //   email: values.email,
                //   plan_id: id,
                //   password: values.password,
                // });
                dataPurchase({
                  type: selectedOption,
                  source:
                    Platform.OS === "android"
                      ? "ANDROID"
                      : Platform.OS === "ios"
                      ? "IOS"
                      : "WEB",
                  phone_number: values.phone_number,
                  email: values.email,
                  plan_id: id,
                  password: values.password,
                });
                setIsVisible(true);
              }}
              validationSchema={validationSchema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                  <SelectorBox
                    operatorHeader="enter your phone number"
                    children={
                      <SelectorInput
                        labelTextUpper="Country"
                        labelTextLower="NGN"
                        selectorInputPlaceholder="Your phone number"
                        keyboardType="numeric"
                        onChangeText={handleChange("phone_number")}
                        onBlur={handleBlur("phone_number")}
                        value={values.phone_number}
                        errorText={errors.phone_number}
                      />
                    }
                  />

                  <PaymentContainer>
                    <SelectorHeader>select payment method</SelectorHeader>

                    <PaymentOptionContainer
                      style={{ backgroundColor: dataState.theme.secondary }}
                    >
                      {buttons.map((item) => (
                        <PaymentOptionButton
                          key={item}
                          style={{
                            backgroundColor:
                              selectedOption === item
                                ? colors.COLOR_WHITE
                                : dataState.theme.secondary,
                          }}
                          onPress={() => {
                            setSelectedOption(item);
                          }}
                        >
                          <PaymentOptionButtonText
                            style={{
                              color:
                                selectedOption === item
                                  ? dataState.theme.secondary
                                  : colors.COLOR_WHITE,
                            }}
                          >
                            {item}
                          </PaymentOptionButtonText>
                        </PaymentOptionButton>
                      ))}
                    </PaymentOptionContainer>
                  </PaymentContainer>

                  <SelectorBox
                    operatorHeader=""
                    children={
                      selectedOption === "Wallet" ? (
                        <SelectorInput
                          labelTextUpper="Wallet Balance"
                          labelTextCenter={`NGN ${authState.user.wallet_balance}`}
                          labelTextLower="Password"
                          selectorInputPlaceholder="Please enter your password"
                          keyboardType="default"
                          secureTextEntry
                          onChangeText={handleChange("password")}
                          onBlur={handleBlur("password")}
                          value={values.password}
                          errorText={errors.password}
                        />
                      ) : (
                        <SelectorInput
                          labelTextUpper="Email"
                          selectorInputPlaceholder="Please enter your email"
                          keyboardType="email-address"
                          onChangeText={handleChange("email")}
                          onBlur={handleBlur("email")}
                          secureTextEntry={false}
                          value={values.email}
                          errorText={errors.email}
                        />
                      )
                    }
                  />

                  <PaymentButton
                    style={{ backgroundColor: dataState.theme.secondary }}
                    onPress={handleSubmit}
                  >
                    {dataState.isLoading ? (
                      <LoadingComponent color={theme.colors.COLOR_WHITE} />
                    ) : (
                      <PayText>
                        Pay NGN{" "}
                        {selectedOption === "Wallet"
                          ? formatAmount(walletPrice)
                          : formatAmount(atmPrice)}
                      </PayText>
                    )}
                  </PaymentButton>
                </>
              )}
            </Formik>

            <APIModal state={dataState} isVisible={isVisible} />
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default DataScreen;
