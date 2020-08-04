import React, { useState, useEffect, useContext } from "react";
import { ScrollView } from "react-native";
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

const SubscriptionScreen = ({ navigation, route }) => {
  const [modal, setModal] = useState(false);
  const { state: dataState, searchUserSubscriptions } = useContext(DataContext);
  const { colors } = theme;

  const lastPage = dataState.subscriptionsData.last_page;

  return (
    <SafeAreaView>
      <Header
        title="Subscriptions"
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
            {dataState.subscriptionsData.data.map((item, index) => (
              <Ticker
                key={index}
                icon={<DataIcon />}
                header={item.network}
                caption={item.plan_id}
                date={item.created_at}
                amount={`NGN ${item.amount}`}
                handleSelect={() =>
                  navigation.navigate("SubscriptionDetailsScreen", {
                    subscription: item,
                    color: dataState.theme.secondary,
                  })
                }
              />
            ))}
            <FilterModal
              value={modal}
              onBackdropPress={() => setModal(false)}
              route={route}
              lastPage={lastPage}
              applyAction={searchUserSubscriptions}
            />
          </Container>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubscriptionScreen;
