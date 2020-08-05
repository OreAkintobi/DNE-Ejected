import React, { useState, useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import SafeAreaView from "../../commons/safe-area-view";
import { theme } from "../../theme/types";
import { Context as AuthContext } from "../../store/auth-context";
import { Context as DataContext } from "../../store/data-context";
import Header from "../../commons/header";
import TopBar from "../../components/TopBar";
import BuyAirtimeIcon from "../../../assets/icons/BuyAirtimeIcon";
import BuyDataIcon from "../../../assets/icons/BuyDataIcon";
import PeopleIcon from "../../../assets/icons/PeopleIcon";
import PricingIcon from "../../../assets/icons/PricingIcon";
import WalletHistoryIcon from "../../../assets/icons/WalletHistoryIcon";
import WalletIcon from "../../../assets/icons/WalletIcon";
import WalletIconSmall from "../../../assets/icons/Small/WalletIconSmall";
import BankIcon from "../../../assets/icons/Small/BankIcon";
import AccountIcon from "../../../assets/icons/Small/AccountIcon";
import UserIconDark from "../../../assets/icons/Small/UserIconDark";
import CautionIcon from "../../../assets/icons/Small/CautionIcon";
import ContactIcon from "../../../assets/icons/Small/ContactIcon";
import APIModal from "../../components/APIModal";
import RNMonnify from "@monnify/react-native-sdk";

import {
  Container,
  BankDetailsContainer,
  DetailContainer,
  DetailText,
  ActivitiesContainer,
  Activity,
  ActivityCaption,
  ActivitySelector,
  NotificationSpace,
  NotificationText,
  WalletText,
  TextTouchable,
  WalletView,
} from "./styles";
import RefreshIcon from "../../../assets/icons/RefreshIcon";

const HomeScreen = ({ navigation }) => {
  const { colors, fonts } = theme;
  const { state: authState } = useContext(AuthContext);
  const {
    state: dataState,
    getBusinessData,
    getUserTransactions,
    getUserSubscriptions,
  } = useContext(DataContext);

  const [isVisible, setIsVisible] = useState(false);

  const activityItems = [
    {
      caption: "fund wallet",
      screen: "WalletScreen",
      icon: <WalletIcon background={dataState.theme.secondary} />,
    },
    {
      caption: "buy data",
      screen: "DataPlanScreen",
      icon: <BuyDataIcon background={dataState.theme.secondary} />,
    },
    {
      caption: "buy airtime",
      screen: "AirtimeScreen",
      icon: <BuyAirtimeIcon background={dataState.theme.secondary} />,
    },
    {
      caption: "pay cable TV",
      screen: "AboutScreen",
      icon: <WalletHistoryIcon background={dataState.theme.secondary} />,
    },
    {
      caption: "buy electric",
      screen: null,
      icon: <PricingIcon background={dataState.theme.secondary} />,
    },
    {
      caption: "transfer funds",
      screen: null,
      icon: <PeopleIcon background={dataState.theme.secondary} />,
    },
  ];

  const getData = () => {
    getBusinessData();
    getUserTransactions();
    getUserSubscriptions();
    setIsVisible(true);
  };

  useEffect(() => {
    RNMonnify.initialize({
      apiKey: "MK_TEST_Y43UX3BPP9",
      secret: "RFEAYVQLMYQGECQTHANVEPDSJHH4XYQJ",
      contractCode: "5148698185",
      applicationMode: "TEST",
    });

    getBusinessData();
    getUserTransactions();
    getUserSubscriptions();
    setIsVisible(true);

    let timeOutHandler = null;

    if (!dataState.isLoading) {
      timeOutHandler = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }

    return () => clearTimeout(timeOutHandler);
  }, []);

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Header
          title="DataNow"
          headerRight={() => (
            <ContactIcon backgroundColor={colors.COLOR_WHITE} />
          )}
        />
        <TopBar
          background={dataState.theme.secondary}
          icon={<WalletIconSmall />}
          child={
            <WalletView>
              <TextTouchable
                onPress={() =>
                  authState.isSignedIn === false
                    ? navigation.navigate("LoginScreen")
                    : undefined
                }
              >
                <WalletText style={{ marginRight: 10 }}>
                  {authState.isSignedIn
                    ? `NGN ${authState.user.wallet_balance}`
                    : "SIGN IN"}
                </WalletText>
              </TextTouchable>
              {authState.isSignedIn ? (
                <TextTouchable
                  onPress={() => {
                    getData();
                  }}
                >
                  <RefreshIcon />
                </TextTouchable>
              ) : null}
            </WalletView>
          }
          textColor={colors.COLOR_WHITE}
          captionText="Wallet Balance"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <Container>
            <BankDetailsContainer>
              <DetailContainer>
                <BankIcon backgroundColor={dataState.theme.secondary} />
                <DetailText>
                  <DetailText style={{ fontFamily: fonts.RobotoBold }}>
                    Bank:{" "}
                  </DetailText>
                  Providus Bank
                </DetailText>
              </DetailContainer>
              <DetailContainer>
                <AccountIcon backgroundColor={dataState.theme.secondary} />
                <DetailText>
                  <DetailText style={{ fontFamily: fonts.RobotoBold }}>
                    Account Number:{" "}
                  </DetailText>
                  {authState.isSignedIn
                    ? authState.user.monnify_account_number
                    : ""}
                </DetailText>
              </DetailContainer>
              <DetailContainer>
                <UserIconDark backgroundColor={dataState.theme.secondary} />
                <DetailText>
                  <DetailText style={{ fontFamily: fonts.RobotoBold }}>
                    Account Name:{" "}
                  </DetailText>
                  {authState.isSignedIn
                    ? `${authState.user.lastname} ${authState.user.firstname} ${authState.user.othername}`
                    : ""}
                </DetailText>
              </DetailContainer>
              <DetailText
                style={{ color: colors.BLUE_LINK_TEXT, textAlign: "center" }}
              >
                Transfer into your dedicated account for auto-wallet funding
                (₦50 charge)
              </DetailText>
            </BankDetailsContainer>
            <ActivitiesContainer>
              {activityItems.map((item) => (
                <Activity key={item.caption}>
                  <ActivitySelector
                    disabled={item.screen === null}
                    onPress={() => {
                      item.screen ? navigation.navigate(item.screen) : null;
                    }}
                  >
                    {item.screen === null ? null : item.icon}
                  </ActivitySelector>
                  <ActivityCaption>
                    {item.screen === null ? null : item.caption}
                  </ActivityCaption>
                </Activity>
              ))}
            </ActivitiesContainer>
            {dataState.businessData.settings ? (
              <DetailText
                style={{
                  fontFamily: fonts.RobotoBold,
                  textAlign: "left",
                  marginTop: 30,
                  marginBottom: 10,
                  fontSize: 16,
                }}
              >
                Notifications
              </DetailText>
            ) : null}

            <NotificationSpace>
              {dataState.businessData.settings ? (
                <>
                  <CautionIcon />
                  <NotificationText>
                    {dataState.businessData.settings.notification}
                  </NotificationText>
                </>
              ) : null}
            </NotificationSpace>
            <APIModal
              state={dataState}
              isVisible={isVisible}
              onBackdropPress={() => setIsVisible(false)}
            />
          </Container>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
