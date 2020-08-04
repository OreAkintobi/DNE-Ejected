import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CautionIcon(props) {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M11 22C4.933 22 0 17.067 0 11S4.933 0 11 0s11 4.933 11 11-4.933 11-11 11zm0-19.985c-4.956 0-8.985 4.03-8.985 8.985 0 4.956 4.03 8.985 8.985 8.985 4.956 0 8.985-4.03 8.985-8.985 0-4.956-4.03-8.985-8.985-8.985z"
        fill="#000"
      />
      <Path
        d="M11 9.124c.741 0 1.343.602 1.343 1.343v5.558a1.344 1.344 0 01-2.686 0v-5.558c0-.74.602-1.343 1.343-1.343zM11 4.655a1.621 1.621 0 110 3.242 1.621 1.621 0 010-3.242z"
        fill="#000"
      />
    </Svg>
  );
}

export default CautionIcon;
