import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DownIcon(props) {
  return (
    <Svg width={22} height={34} viewBox="0 0 22 34" fill="none" {...props}>
      <Path
        d="M11.133.506c-.544 0-.986.395-.986.88v29.22l-8.464-7.559a1.046 1.046 0 00-.697-.258c-.253 0-.505.086-.697.258a.816.816 0 000 1.246l10.014 8.943c.384.344 1.01.344 1.394 0l10.014-8.944a.816.816 0 000-1.245 1.071 1.071 0 00-1.394 0l-8.198 7.32V1.388c0-.486-.441-.881-.986-.881z"
        fill="red"
      />
    </Svg>
  );
}

export default DownIcon;
