import React, { useContext } from "react";
import { OperatorContainer, SelectorHeader, SelectorContainer } from "./styles";
import { Context as DataContext } from "../../store/data-context";

const SelectorBox = ({ operatorHeader, children, containerHeight }) => {
  const { state: dataState } = useContext(DataContext);

  return (
    <>
      <OperatorContainer>
        {operatorHeader ? (
          <SelectorHeader>{operatorHeader}</SelectorHeader>
        ) : null}
        <SelectorContainer
          style={{
            height: containerHeight ? containerHeight : 97,
            backgroundColor: `${dataState.theme.primary}12`,
          }}
        >
          {children}
        </SelectorContainer>
      </OperatorContainer>
    </>
  );
};

export default SelectorBox;
