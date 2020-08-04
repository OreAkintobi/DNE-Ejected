import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PaymentDetailsIcon(props) {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
      <Path
        d="M28.5 4.5h-6.27c-.63-1.74-2.28-3-4.23-3-1.95 0-3.6 1.26-4.23 3H7.5c-1.65 0-3 1.35-3 3v21c0 1.65 1.35 3 3 3h21c1.65 0 3-1.35 3-3v-21c0-1.65-1.35-3-3-3zM18 4.5c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.675-1.5-1.5.675-1.5 1.5-1.5zm3 21H10.5v-3H21v3zm4.5-6h-15v-3h15v3zm0-6h-15v-3h15v3z"
        fill={props.backgroundColor}
      />
    </Svg>
  );
}

export default PaymentDetailsIcon;
