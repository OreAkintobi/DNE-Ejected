import React, { FunctionComponent } from "react";
import { Container } from "./styles";

const SafeAreaView = ({ children, style }) => (
  <Container style={style}>{children}</Container>
);

export default SafeAreaView;
