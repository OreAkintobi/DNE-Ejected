import React, { useContext, useState, useEffect } from "react";
import { ScrollView, Platform, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { theme } from "../../theme/types";
import SafeAreaView from "../../commons/safe-area-view";
import SelectorBox from "../../components/SelectorBox";
import SelectorInput from "../../components/SelectorInput";
import Header from "../../commons/header";
import { Context as AuthContext } from "../../store/auth-context";
import { Context as DataContext } from "../../store/data-context";
import LoadingComponent from "../../components/LoadingComponent";
import APIModal from "../../components/APIModal";
import RNMonnify from "@monnify/react-native-sdk";

import {
  Container,
  BodyContainer,
  PayText,
  PaymentButton,
  SelectorHeader,
  ErrorText,
} from "./styles";

const validationSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Required")
    .min(50, "Please enter amount of NGN 50 or higher"),
});

const WalletScreen = ({ navigation }) => {
  const { colors, fonts } = theme;
  const [value, setValue] = useState("");
  const { signout, state: authState, getUser } = useContext(AuthContext);
  const { state: dataState, getBusinessData, fundWallet } = useContext(
    DataContext
  );

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

  const transactionFee = (number) => (number * 0.012).toFixed(2);

  const totalFee = (number) => {
    if (number === "") {
      return 0;
    } else {
      let calc = parseFloat(number) + parseFloat(transactionFee(number));
      return calc;
    }
  };

  const formatAmount = (amount) =>
    totalFee(amount).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const chargeCard = (amount) => {
    RNMonnify.initializePayment({
      amount: amount,
      customerName: `${authState.user.firstname} ${authState.user.lastname}`,
      customerEmail: `${authState.user.email}`,
      paymentReference: Math.random().toString(20).substr(2, 10),
      paymentDescription: "Fund Wallet",
      currencyCode: "NGN",
      incomeSplitConfig: [],
    })
      .then((response) => {
        console.log(response); // card charged successfully, get reference here
        fundWallet({ amount: amount });
        setIsVisible(true);
      })
      .catch((error) => {
        console.log(error); // error is a javascript Error object
        console.log(error.message);
        console.log(error.code);
      });
  };

  return (
    <SafeAreaView>
      <Header title="Wallet" headerLeft />
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
            <BodyContainer>
              <SelectorHeader style={{ marginTop: 25, marginBottom: 0 }}>
                how much do you want to pay into your wallet?
              </SelectorHeader>
            </BodyContainer>

            <Formik
              initialValues={{ amount: 0 }}
              onSubmit={(values) => {
                chargeCard(totalFee(values.amount));
                // chargeCard(values.amount)
              }}
              validationSchema={validationSchema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                  <SelectorBox
                    children={
                      <SelectorInput
                        labelTextUpper="Country"
                        labelTextLower="NGN"
                        selectorInputPlaceholder="Enter amount"
                        keyboardType="numeric"
                        value={values.amount}
                        onChangeText={handleChange("amount")}
                        onBlur={handleBlur("amount")}
                        errorText={errors.amount}
                      />
                    }
                  />

                  <BodyContainer>
                    <SelectorHeader>
                      TRANSACTION FEE (1.2%):{"       "}NGN{" "}
                      {transactionFee(values.amount)}
                    </SelectorHeader>
                    <SelectorHeader style={{ marginTop: 0, marginBottom: 25 }}>
                      TOTAL AMOUNT:{"                         "}NGN{" "}
                      {formatAmount(values.amount)}
                    </SelectorHeader>
                  </BodyContainer>
                  <PaymentButton
                    style={{ backgroundColor: dataState.theme.secondary }}
                    onPress={() => handleSubmit()}
                  >
                    {dataState.isLoading ? (
                      <LoadingComponent color={colors.COLOR_WHITE} />
                    ) : (
                      <PayText>Pay NGN {formatAmount(values.amount)}</PayText>
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

export default WalletScreen;
