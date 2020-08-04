import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PaymentsIcon(props) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 34 37" fill="none" {...props}>
      <Path
        d="M32.21 30.833v2.056C32.21 35.15 30.6 37 28.633 37H3.579C1.593 37 0 35.15 0 32.889V4.11C0 1.85 1.593 0 3.579 0h25.053C30.6 0 32.21 1.85 32.21 4.111v2.056H16.105c-1.986 0-3.579 1.85-3.579 4.11v16.445c0 2.261 1.593 4.111 3.58 4.111H32.21zm-16.105-4.11H34V10.277H16.105v16.444zm7.158-5.14c-1.485 0-2.684-1.377-2.684-3.083 0-1.706 1.199-3.083 2.684-3.083s2.684 1.377 2.684 3.083c0 1.706-1.199 3.083-2.684 3.083z"
        fill={props.fillColor}
      />
    </Svg>
  );
}

export default PaymentsIcon;
