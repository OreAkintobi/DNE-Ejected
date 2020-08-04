import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import SafeAreaView from "../../commons/safe-area-view";
import Header from "../../commons/header";
import { Context as DataContext } from "../../store/data-context";
import { Context as AuthContext } from "../../store/auth-context";
import PersonProfileIcon from "../../../assets/icons/PersonProfileIcon";
import { theme } from "../../theme/types";
import LoadingDataScreen from "../../components/LoadingDataScreen";

import {
  Container,
  TopContainer,
  DetailContainer,
  LabelText,
  DetailText,
  EditButton,
  EditButtonText,
  ThemeButton,
  ThemeContainer,
  ThemeSelect,
} from "./styles";

const ProfileScreen = ({ navigation }) => {
  const { state: dataState, removeData } = useContext(DataContext);
  const { signout, state: authState } = useContext(AuthContext);

  return authState.isLoading ? (
    <LoadingDataScreen />
  ) : (
    <SafeAreaView>
      <Header title="Profile" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Container>
          <TopContainer
            style={{
              borderBottomColor: dataState.theme.secondary,
            }}
          >
            <PersonProfileIcon backgroundColor={dataState.theme.secondary} />
          </TopContainer>
          <DetailContainer>
            <LabelText>first name</LabelText>
            <DetailText>{authState.user.firstname}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>last name</LabelText>
            <DetailText>{authState.user.lastname}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>other name(s)</LabelText>
            <DetailText>{authState.user.othername}</DetailText>
          </DetailContainer>
          <DetailContainer>
            <LabelText>email</LabelText>
            <DetailText>{authState.user.email}</DetailText>
          </DetailContainer>
          <DetailContainer
            style={{
              borderBottomWidth: 2,
              borderBottomColor: dataState.theme.secondary,
              paddingBottom: 60,
            }}
          >
            <LabelText>phone number</LabelText>
            <DetailText>{authState.user.phone_number}</DetailText>
          </DetailContainer>
          <EditButton onPress={() => navigation.navigate("EditProfileScreen")}>
            <EditButtonText style={{ color: theme.colors.BLUE_LINK_TEXT }}>
              edit account
            </EditButtonText>
          </EditButton>
          <EditButton
            onPress={() => {
              signout();
            }}
          >
            <EditButtonText style={{ color: theme.colors.LIGHT_RED }}>
              sign out
            </EditButtonText>
          </EditButton>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
