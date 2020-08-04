import React, { useState } from "react";
import { ScrollView } from "react-native";
import { theme } from "../../theme/types";
import SafeAreaView from "../../commons/safe-area-view";
import Header from "../../commons/header";
import PaymentDetailsIcon from "../../../assets/icons/PaymentDetailsIcon";

import {
  Container,
  DetailContainer,
  DetailText,
  HeaderText,
  LabelText,
  TopContainer,
  BodyContainer,
} from "./styles";

const PaymentDetailsScreen = ({ route, navigation }) => {
  const { transaction, color } = route.params;
  const { colors } = theme;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView>
      <Header title="Details" headerLeft />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Container>
          <TopContainer>
            <PaymentDetailsIcon backgroundColor={color} />
          </TopContainer>
          <DetailContainer>
            <LabelText>transaction type</LabelText>
            <DetailText>{transaction.transaction_type}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>amount</LabelText>
            <DetailText>NGN {transaction.amount}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>payer</LabelText>
            <DetailText>{transaction.payer}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>receiver</LabelText>
            <DetailText>{transaction.receiver}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>initial balance</LabelText>
            <DetailText>{transaction.amount_before}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>balance after</LabelText>
            <DetailText>{transaction.amount_after}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>date</LabelText>
            <DetailText>{transaction.created_at}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>status</LabelText>
            <DetailText>{transaction.status}</DetailText>
          </DetailContainer>
          <DetailContainer
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <LabelText style={{ textAlign: "center" }}>description</LabelText>
            <DetailText style={{ textAlign: "center" }}>
              {transaction.description}
            </DetailText>
          </DetailContainer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentDetailsScreen;
