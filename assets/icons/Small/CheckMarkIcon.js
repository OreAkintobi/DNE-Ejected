import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CheckMarkIcon(props) {
  return (
    <Svg width={23} height={18} viewBox="0 0 23 18" fill="none" {...props}>
      <Path
        d="M2.98 9.426a1.693 1.693 0 00-2.573 2.202l4.491 5.24 1.287-1.1-1.29 1.104a1.698 1.698 0 002.528.057L22.46 2.933a1.694 1.694 0 00-2.307-2.48L6.322 13.327l-3.343-3.9z"
        fill="#000"
      />
    </Svg>
  );
}

export default CheckMarkIcon;
