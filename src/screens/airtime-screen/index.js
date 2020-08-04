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
import Header from "../../commons/header";
import SafeAreaView from "../../commons/safe-area-view";
import SelectorBox from "../../components/SelectorBox";
import SelectorInput from "../../components/SelectorInput";
import { Context as AuthContext } from "../../store/auth-context";
import { Context as DataContext } from "../../store/data-context";
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
  DiscountContainer,
  DiscountText,
} from "./styles";

const validationSchema = Yup.object().shape({
  phone_number: Yup.string()
    .required("Phone number is required")
    .min(11, "Please enter a complete phone number."),
  amount: Yup.number()
    .required("Please enter an amount")
    .min(50, "Please enter an amount of NGN 50 or more"),
  password: Yup.string(),
  email: Yup.string(),
});

const AirtimeScreen = () => {
  const { state: authState } = useContext(AuthContext);
  const { state: dataState, airtimePurchase } = useContext(DataContext);

  const airtimePlans = dataState.businessData.airtime_plans;
  const airtimePlanNames = Object.keys(airtimePlans);

  const { colors } = theme;

  const [selectedOption, setSelectedOption] = useState("Wallet");
  const [selectedNetwork, setSelectedNetwork] = useState("MTN");
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

  const atmDiscount = 100 - airtimePlans[selectedNetwork]["atm_price"];
  const walletDiscount = 100 - airtimePlans[selectedNetwork]["wallet_price"];

  const operators = [
    { name: "MTN", icon: mtn },
    { name: "Airtel", icon: airtel },
    { name: "Etisalat", icon: etisalat },
    { name: "Glo", icon: glo },
  ];
  const buttons = ["Wallet", "ATM"];

  const formatAmount = (amount) =>
    parseFloat(amount).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  return (
    <SafeAreaView>
      <Header title="Airtime Purchase" headerLeft />
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
              operatorHeader="select your operator"
              children={airtimePlanNames.map((operator) => (
                <OptionBoxContainer
                  key={operator}
                  onPress={() => {
                    setSelectedNetwork(operator);
                  }}
                >
                  <OptionBox
                    style={{
                      borderColor:
                        selectedNetwork === operator
                          ? colors.DARK_TEXT
                          : "transparent",
                    }}
                  >
                    <Image
                      source={
                        operator === "MTN"
                          ? mtn
                          : operator === "GLO"
                          ? glo
                          : operator === "AIRTEL"
                          ? airtel
                          : etisalat
                      }
                      style={{ height: 55, width: 55 }}
                    />
                  </OptionBox>
                  <OptionCaption>{operator.name}</OptionCaption>
                </OptionBoxContainer>
              ))}
            />

            <Formik
              initialValues={{
                phone_number: "",
                amount: 0,
                password: "",
                email: "",
              }}
              onSubmit={(values) => {
                airtimePurchase({
                  type: selectedOption,
                  source:
                    selectedOption === "Wallet"
                      ? "WEB"
                      : Platform.OS === "android"
                      ? "ANDROID"
                      : Platform.OS === "ios"
                      ? "IOS"
                      : "WEB",
                  phone_number: values.phone_number,
                  email: values.email,
                  amount: values.amount,
                  network: selectedNetwork.toUpperCase(),
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

                  <SelectorBox
                    operatorHeader="how much do you want to recharge?"
                    containerHeight={120}
                    children={
                      <DiscountContainer>
                        <SelectorInput
                          labelTextUpper="Currency"
                          labelTextLower="NGN"
                          selectorInputPlaceholder="Enter amount"
                          keyboardType="numeric"
                          onChangeText={handleChange("amount")}
                          onBlur={handleBlur("amount")}
                          value={values.amount}
                          errorText={errors.amount}
                        />
                        <DiscountText style={{ marginTop: 15 }}>
                          ATM Discount: {atmDiscount}%
                        </DiscountText>
                        <DiscountText>
                          WALLET Discount: {walletDiscount}%
                        </DiscountText>
                      </DiscountContainer>
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
                          secureTextEntry
                          onChangeText={handleChange("password")}
                          onBlur={handleBlur("password")}
                          value={values.password}
                          errorText={errors.password}
                        />
                      ) : (
                        <SelectorInput
                          labelTextUpper="Email"
                          selectorInputPlaceholder="Your email"
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
                        {formatAmount(
                          values.amount -
                            values.amount *
                              (selectedOption === "Wallet"
                                ? walletDiscount / 100
                                : atmDiscount / 100)
                        )}
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

export default AirtimeScreen;
