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

const SubscriptionDetailsScreen = ({ route, navigation }) => {
  const { subscription, color } = route.params;
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
            <LabelText>subscription type</LabelText>
            <DetailText>{subscription.transaction_type}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>amount</LabelText>
            <DetailText>NGN {subscription.amount}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>phone number</LabelText>
            <DetailText>{subscription.phone_number}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>network</LabelText>
            <DetailText>{subscription.network}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>payment method</LabelText>
            <DetailText>{subscription.payment_method}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>date</LabelText>
            <DetailText>{subscription.created_at}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>status</LabelText>
            <DetailText>{subscription.status}</DetailText>
          </DetailContainer>
          <DetailContainer
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <LabelText style={{ textAlign: "center" }}>plan id</LabelText>
            <DetailText style={{ textAlign: "center" }}>
              {subscription.plan_id}
            </DetailText>
          </DetailContainer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubscriptionDetailsScreen;
