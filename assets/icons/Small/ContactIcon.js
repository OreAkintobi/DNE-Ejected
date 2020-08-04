import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ContactIcon(props) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M17 12.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 015.5 1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1c0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM16 9h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"
        fill={props.backgroundColor}
      />
    </Svg>
  );
}

export default ContactIcon;
