import React, { useState } from "react";
import { Platform, ScrollView, KeyboardAvoidingView } from "react-native";
import Modal from "react-native-modal";
import { theme } from "../../theme/types";
import DropDownPicker from "react-native-dropdown-picker";
import {
  months,
  networks,
  paymentMethods,
  populateDays,
  sizes,
  types,
  years,
} from "../../libs/modalData";

import {
  ModalView,
  ModalButton,
  ModalButtonText,
  ButtonsContainer,
  SelectorContainer,
  SelectorHeader,
  FilterInput,
  FilterView,
} from "./styles";

const FilterModal = ({
  value,
  onBackdropPress,
  applyAction,
  route,
  lastPage,
}) => {
  const { colors } = theme;

  const [search, setSearch] = useState("");

  const [startDay, setStartDay] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");

  const [endDay, setEndDay] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");

  const [size, setSize] = useState("");

  const [page, setPage] = useState("");

  const [network, setNetwork] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("");

  const [transactionType, setTransactionType] = useState("");

  const getPages = () => {
    const pages = [];
    for (let index = 1; index <= lastPage; index++) {
      pages.push({ label: index, value: index });
    }
    return pages;
  };

  const getStartDate = () => {
    return `${startYear}-${startMonth}-${startDay}` === "--"
      ? ""
      : `${startYear}-${startMonth}-${startDay}`;
  };

  const getEndDate = () => {
    return `${endYear}-${endMonth}-${endDay}` === "--"
      ? ""
      : `${endYear}-${endMonth}-${endDay}`;
  };

  return (
    <Modal
      isVisible={value}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={onBackdropPress}
      useNativeDriver={true}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      <ModalView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, width: "100%" }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, width: "100%" }}
          >
            <FilterView>
              <SelectorHeader style={{ marginTop: 15 }}>
                Transaction Type
              </SelectorHeader>
              <SelectorContainer
                style={{ zIndex: Platform.OS !== "android" ? 15 : undefined }}
              >
                <FilterInput
                  placeholder="Search w. phone number or source"
                  defaultValue={search}
                  onChangeText={(text) => setSearch(text)}
                />
              </SelectorContainer>
              <SelectorHeader>Start Date</SelectorHeader>
              <SelectorContainer
                style={{ zIndex: Platform.OS !== "android" ? 14 : undefined }}
              >
                <DropDownPicker
                  items={months}
                  defaultValue={startMonth}
                  placeholder="mm"
                  containerStyle={{ height: 40, width: 80 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                    height: 30,
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => setStartMonth(item.value)}
                />
                <DropDownPicker
                  items={
                    startMonth === 9 ||
                    startMonth === 4 ||
                    startMonth === 6 ||
                    startMonth === 11
                      ? populateDays(30)
                      : startMonth === 2
                      ? populateDays(28)
                      : populateDays(31)
                  }
                  defaultValue={startDay}
                  placeholder="dd"
                  containerStyle={{ height: 40, width: 60 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                    height: 30,
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => setStartDay(item.value)}
                />
                <DropDownPicker
                  items={years}
                  defaultValue={startYear}
                  placeholder="yy"
                  containerStyle={{ height: 40, width: 75 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                    height: 30,
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => setStartYear(item.value)}
                />
              </SelectorContainer>
              <SelectorHeader>End Date</SelectorHeader>
              <SelectorContainer
                style={{ zIndex: Platform.OS !== "android" ? 13 : undefined }}
              >
                <DropDownPicker
                  items={months}
                  defaultValue={endMonth}
                  placeholder="mm"
                  containerStyle={{ height: 40, width: 80 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                    height: 30,
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => setEndMonth(item.value)}
                />
                <DropDownPicker
                  items={
                    startMonth === 9 ||
                    startMonth === 4 ||
                    startMonth === 6 ||
                    startMonth === 11
                      ? populateDays(30)
                      : startMonth === 2
                      ? populateDays(28)
                      : populateDays(31)
                  }
                  defaultValue={endDay}
                  placeholder="dd"
                  containerStyle={{ height: 40, width: 60 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                    height: 30,
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => setEndDay(item.value)}
                />
                <DropDownPicker
                  items={years}
                  defaultValue={endYear}
                  placeholder="yy"
                  containerStyle={{ height: 40, width: 75 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                    height: 30,
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => setEndYear(item.value)}
                />
              </SelectorContainer>
              <SelectorHeader>Size</SelectorHeader>
              <SelectorContainer
                style={{ zIndex: Platform.OS !== "android" ? 12 : undefined }}
              >
                <DropDownPicker
                  items={sizes}
                  defaultValue={size}
                  placeholder="Size of results per page"
                  containerStyle={{ height: 40, width: 215 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                    height: 30,
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => setSize(item.value)}
                />
              </SelectorContainer>
              <SelectorHeader>Page</SelectorHeader>
              <SelectorContainer
                style={{ zIndex: Platform.OS !== "android" ? 11 : undefined }}
              >
                <DropDownPicker
                  items={getPages()}
                  defaultValue={page}
                  placeholder="Number of pages"
                  containerStyle={{ height: 40, width: 215 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                    height: 30,
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => setPage(item.value)}
                />
              </SelectorContainer>

              {route ? (
                <>
                  <SelectorHeader>Network</SelectorHeader>
                  <SelectorContainer
                    style={{
                      zIndex: Platform.OS !== "android" ? 10 : undefined,
                    }}
                  >
                    <DropDownPicker
                      items={networks}
                      defaultValue={network}
                      placeholder="Select a network"
                      containerStyle={{ height: 40, width: 215 }}
                      style={{ backgroundColor: "#fafafa" }}
                      itemStyle={{
                        justifyContent: "flex-start",
                        height: 30,
                      }}
                      dropDownStyle={{ backgroundColor: "#fafafa" }}
                      onChangeItem={(item) => setNetwork(item.value)}
                    />
                  </SelectorContainer>
                </>
              ) : null}

              <SelectorHeader>Payment Method</SelectorHeader>
              <SelectorContainer
                style={{ zIndex: Platform.OS !== "android" ? 9 : undefined }}
              >
                <DropDownPicker
                  items={paymentMethods}
                  defaultValue={paymentMethod}
                  placeholder="Select payment method"
                  containerStyle={{ height: 40, width: 215 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                    height: 30,
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => setPaymentMethod(item.value)}
                />
              </SelectorContainer>
              <SelectorHeader>Transaction Type</SelectorHeader>
              <SelectorContainer
                style={{ zIndex: Platform.OS !== "android" ? 8 : undefined }}
              >
                <DropDownPicker
                  items={types}
                  defaultValue={transactionType}
                  placeholder="Select transaction type"
                  containerStyle={{ height: 40, width: 215 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                    height: 30,
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => setTransactionType(item.value)}
                />
              </SelectorContainer>
            </FilterView>
          </ScrollView>
        </KeyboardAvoidingView>
        <ButtonsContainer>
          <ModalButton onPress={onBackdropPress}>
            <ModalButtonText>Cancel</ModalButtonText>
          </ModalButton>
          <ModalButton
            style={{ backgroundColor: colors.DARK_TEXT }}
            onPress={() => {
              applyAction({
                search: search,
                date_from: getStartDate(),
                date_to: getEndDate(),
                size: size,
                page: page,
                network: network,
                payment_method: paymentMethod,
                transaction_type: transactionType,
              });
              onBackdropPress();
            }}
          >
            <ModalButtonText style={{ color: colors.COLOR_WHITE }}>
              Apply
            </ModalButtonText>
          </ModalButton>
        </ButtonsContainer>
      </ModalView>
    </Modal>
  );
};

export default FilterModal;
