import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BankIcon(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 19 21" fill="none" {...props}>
      <Path
        d="M2 9v7h3V9H2zm6 0v7h3V9H8zM0 21h19v-3H0v3zM14 9v7h3V9h-3zM9.5 0L0 5v2h19V5L9.5 0z"
        fill={props.backgroundColor}
      />
    </Svg>
  );
}

export default BankIcon;
