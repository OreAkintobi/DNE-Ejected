import * as React from "react";
import Svg, { Path } from "react-native-svg";

function UpIcon(props) {
  return (
    <Svg width={22} height={34} viewBox="0 0 22 34" fill="none" {...props}>
      <Path
        d="M10.867 33.494c.544 0 .986-.395.986-.88V3.393l8.464 7.559c.192.172.445.258.697.258.253 0 .505-.086.697-.258a.816.816 0 000-1.246L11.697.764a1.071 1.071 0 00-1.394 0L.29 9.708a.816.816 0 000 1.245c.384.344 1.01.344 1.394 0l8.198-7.32v28.98c0 .486.441.881.986.881z"
        fill="#0F4"
      />
    </Svg>
  );
}

export default UpIcon;
