import React, { useState, useEffect, useContext } from "react";
import { ScrollView, View } from "react-native";
import { theme } from "../../theme/types";
import SafeAreaView from "../../commons/safe-area-view";
import Ticker from "../../components/Ticker";
import DataIcon from "../../../assets/icons/Small/DataIcon";
import FilterIcon from "../../../assets/icons/Small/FilterIcon";
import Header from "../../commons/header";
import { Context as DataContext } from "../../store/data-context";
import LoadingDataScreen from "../../components/LoadingDataScreen";
import FilterModal from "../../components/FilterModal";

import { Container } from "./styles";

const PaymentScreen = ({ navigation, route }) => {
  const [modal, setModal] = useState(false);
  const { state: dataState, searchUserTransactions } = useContext(DataContext);
  const { colors } = theme;

  const lastPage = dataState.transactionsData.last_page;

  return (
    <SafeAreaView>
      <Header
        title="Transactions"
        headerRight={() => <FilterIcon backgroundColor={colors.COLOR_WHITE} />}
        functionPassDown={() => {
          setModal(true);
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        {dataState.isLoading ? (
          <LoadingDataScreen />
        ) : (
          <Container>
            {dataState.transactionsData.data.map((item, index) => (
              <Ticker
                key={index}
                icon={<DataIcon />}
                header={item.description}
                caption={`NGN ${item.amount_before}/NGN ${item.amount_after}`}
                date={item.created_at}
                amount={`NGN ${item.amount}`}
                handleSelect={() =>
                  navigation.navigate("PaymentDetailsScreen", {
                    transaction: item,
                    color: dataState.theme.secondary,
                  })
                }
              />
            ))}
            <FilterModal
              value={modal}
              onBackdropPress={() => setModal(false)}
              lastPage={lastPage}
              applyAction={searchUserTransactions}
            />
          </Container>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;
