import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AccountIcon(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 14 18" fill="none" {...props}>
      <Path
        d="M12 0H2C.9 0 .01.9.01 2L0 18l7-3 7 3V2c0-1.1-.9-2-2-2z"
        fill={props.backgroundColor}
      />
    </Svg>
  );
}

export default AccountIcon;
