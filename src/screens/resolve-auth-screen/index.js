import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../../store/auth-context";
import { Context as DataContext } from "../../store/data-context";
import LoadingDataScreen from "../../components/LoadingDataScreen";
import AsyncStorage from "@react-native-community/async-storage";

const ResolveAuthScreen = ({ navigation }) => {
  const {
    state: authState,
    tryLocalSignin,
    // changeTheme
  } = useContext(AuthContext);
  const {
    state: dataState,
    getBusinessData,
    getUserTransactions,
    getUserSubscriptions,
    removeData,
  } = useContext(DataContext);

  useEffect(() => {
    const loadUser = async () => {
      const token = await AsyncStorage.getItem("@token");
      if (token) {
        tryLocalSignin();
        getBusinessData();
        getUserTransactions();
        getUserSubscriptions();
        navigation.navigate("HomeScreen");
      } else {
        navigation.navigate("LoginScreen");
      }
    };

    loadUser();
  }, []);

  return <LoadingDataScreen />;
};

export default ResolveAuthScreen;
