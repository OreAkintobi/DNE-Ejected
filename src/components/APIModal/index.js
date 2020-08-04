import React from "react";
import Modal from "react-native-modal";
import SuccessIcon from "../../../assets/icons/SuccessIcon";
import FailureIcon from "../../../assets/icons/FailureIcon";
import LoadingComponent from "../LoadingComponent";
import { theme } from "../../theme/types";

import { ModalView, ModalText } from "./styles";

const APIModal = ({ onBackdropPress, state, isVisible }) => {
  const { colors } = theme;

  return (
    <Modal
      isVisible={isVisible}
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
        {state.isLoading ? (
          <LoadingComponent color={colors.DARK_TEXT} />
        ) : state.status === "success" ? (
          <>
            <SuccessIcon />
            <ModalText>{state.message}</ModalText>
          </>
        ) : (
          <>
            <FailureIcon />
            <ModalText>{state.message}</ModalText>
          </>
        )}
      </ModalView>
    </Modal>
  );
};

export default APIModal;
