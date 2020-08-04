import React, { useContext } from "react";
import { ScrollView, Image } from "react-native";
import { Context as DataContext } from "../../store/data-context";
import { theme } from "../../theme/types";
import SafeAreaView from "../../commons/safe-area-view";
import Header from "../../commons/header";
import LoadingDataScreen from "../../components/LoadingDataScreen";
import etisalat from "../../../assets/icons/NetworkIcons/9mobile.png";
import airtel from "../../../assets/icons/NetworkIcons/airtel.png";
import glo from "../../../assets/icons/NetworkIcons/glo.png";
import mtn from "../../../assets/icons/NetworkIcons/mtn.png";
import boxShadow from "../../utils/boxShadows";

import {
  Container,
  OptionBoxContainer,
  OptionBox,
  OptionCaption,
  TableHeadingContainer,
  TableHeadingText,
  TableContainer,
  TableBody,
  TableRow,
  TableText,
  TableLabel,
  TableTouchable,
} from "./styles";

const DataPlanScreen = ({ navigation }) => {
  const { state: dataState } = useContext(DataContext);
  const dataPlans = dataState.businessData.data_plans;
  const dataPlanNames = Object.keys(dataPlans);

  const { colors, fonts } = theme;

  return dataState.isLoading ? (
    <LoadingDataScreen />
  ) : (
    <SafeAreaView>
      <Header title="Data Plans" headerLeft />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 25,
        }}
      >
        <Container>
          <TableHeadingContainer>
            <TableHeadingText style={{ width: "50%" }}>plan</TableHeadingText>
            <TableHeadingText style={{ width: "25%" }}>
              wallet price
            </TableHeadingText>
            <TableHeadingText>atm price</TableHeadingText>
          </TableHeadingContainer>

          <TableContainer>
            {dataPlanNames.map((dataPlan, index) => (
              <TableBody key={index}>
                <OptionBoxContainer>
                  <OptionBox>
                    <Image
                      source={
                        dataPlan === "MTN"
                          ? mtn
                          : dataPlan === "GLO"
                          ? glo
                          : dataPlan === "AIRTEL"
                          ? airtel
                          : etisalat
                      }
                      style={{ height: 55, width: 55 }}
                    />
                  </OptionBox>
                  <OptionCaption>{dataPlan}</OptionCaption>
                </OptionBoxContainer>
                {dataPlans[dataPlan].map((carrierPlan, index2) => (
                  <TableRow key={index2}>
                    <TableLabel>
                      <TableText
                        style={{
                          color: theme.colors.DARK_TEXT,
                          textAlign: "left",
                        }}
                      >
                        {carrierPlan.name}
                      </TableText>
                    </TableLabel>

                    <TableTouchable
                      style={
                        ([
                          boxShadow({
                            elevation: 2,
                            shadowColor: colors.DARK_TEXT,
                            width: 1,
                            height: 1,
                          }),
                        ],
                        { backgroundColor: `${dataState.theme.primary}12` })
                      }
                      onPress={() => {
                        navigation.navigate("DataScreen", {
                          id: carrierPlan.id,
                          carrier: dataPlan,
                          planName: carrierPlan.name,
                          walletPrice: carrierPlan.wallet_price,
                          atmPrice: carrierPlan.atm_price,
                          paymentOption: "Wallet",
                        });
                      }}
                    >
                      <TableText>{`₦ ${carrierPlan.wallet_price}`}</TableText>
                    </TableTouchable>

                    <TableTouchable
                      style={
                        ([
                          boxShadow({
                            elevation: 2,
                            shadowColor: colors.DARK_TEXT,
                            width: 1,
                            height: 1,
                          }),
                        ],
                        { backgroundColor: `${dataState.theme.primary}12` })
                      }
                      onPress={() => {
                        navigation.navigate("DataScreen", {
                          id: carrierPlan.id,
                          carrier: dataPlan,
                          planName: carrierPlan.name,
                          atmPrice: carrierPlan.atm_price,
                          walletPrice: carrierPlan.wallet_price,
                          paymentOption: "ATM",
                        });
                      }}
                    >
                      <TableText>{`₦ ${carrierPlan.atm_price}`}</TableText>
                    </TableTouchable>
                  </TableRow>
                ))}
              </TableBody>
            ))}
          </TableContainer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DataPlanScreen;
