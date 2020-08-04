import React, { useContext } from "react";
import { Button, ScrollView, Platform, Linking } from "react-native";
import SafeAreaView from "../../commons/safe-area-view";
import Header from "../../commons/header";
import { theme } from "../../theme/types";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Context as DataContext } from "../../store/data-context";

import {
  Container,
  MidText,
  TopContainer,
  ContactText,
  ContactTextContainer,
  HeaderText,
  ContactTouchable,
} from "./styles";

const AboutScreen = ({ navigation }) => {
  const { colors, fonts } = theme;
  const { state: dataState } = useContext(DataContext);

  const makeCall = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  const sendMail = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  const whatsapp = (number) => {
    Linking.openURL(`https://wa.me/${number}`);
  };

  return (
    <SafeAreaView>
      <Header title="About DataNow" headerLeft />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Container>
          <TopContainer style={{ backgroundColor: dataState.theme.secondary }}>
            <HeaderText>DataNow</HeaderText>
          </TopContainer>
          <MidText style={{ marginTop: 40 }}>
            DataNow is the best choice for vending data. Get access to cheap
            data, airtime, electricity and cable TV subscription.
          </MidText>
          <MidText>
            We are just a click away. Kindly reach us by clicking any of our
            customer service outlets below.
          </MidText>
          <ContactTextContainer
            style={{ borderBottomColor: colors.COLOR_WHITE, marginTop: 20 }}
          >
            <ContactText style={{ color: colors.DARK_TEXT }}>
              CLICK TO SEND US A MESSAGE ON WHATSAPP, CALL OR EMAIL
            </ContactText>
          </ContactTextContainer>
          <ContactTextContainer>
            <FontAwesome
              name="whatsapp"
              size={20}
              color="black"
              style={{ width: "10%" }}
            />
            <ContactTouchable
              onPress={() =>
                whatsapp(
                  `${dataState.businessData.settings.contact_whatsapp_number}`
                )
              }
            >
              <ContactText>
                {dataState.businessData.settings.contact_whatsapp_number}
              </ContactText>
            </ContactTouchable>
          </ContactTextContainer>
          <ContactTextContainer style={{ borderBottomWidth: 0 }}>
            <Ionicons
              name="md-call"
              size={20}
              color="black"
              style={{ width: "10%" }}
            />
            <ContactTouchable
              onPress={() =>
                makeCall(
                  `${dataState.businessData.settings.contact_call_number1}`
                )
              }
            >
              <ContactText>
                {dataState.businessData.settings.contact_call_number1}
              </ContactText>
            </ContactTouchable>
          </ContactTextContainer>
          <ContactTextContainer>
            <Ionicons
              name="md-call"
              size={20}
              color="black"
              style={{ width: "10%" }}
            />
            <ContactTouchable
              onPress={() =>
                makeCall(
                  `${dataState.businessData.settings.contact_call_number2}`
                )
              }
            >
              <ContactText>
                {dataState.businessData.settings.contact_call_number2}
              </ContactText>
            </ContactTouchable>
          </ContactTextContainer>
          <ContactTextContainer>
            <MaterialIcons
              name="email"
              size={24}
              color="black"
              style={{ width: "10%" }}
            />
            <ContactTouchable
              onPress={() =>
                sendMail(
                  `${dataState.businessData.settings.contact_email_address}`
                )
              }
            >
              <ContactText>
                {dataState.businessData.settings.contact_email_address}
              </ContactText>
            </ContactTouchable>
          </ContactTextContainer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;
