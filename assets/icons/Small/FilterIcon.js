import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 28 27" fill="none" {...props}>
      <Path
        d="M7.715 19.988a3.855 3.855 0 00-2.805-3.706V1.05a1.05 1.05 0 00-2.1 0v15.232a3.848 3.848 0 000 7.41v2.25a1.05 1.05 0 002.1 0v-2.25a3.855 3.855 0 002.805-3.704zM3.86 21.75a1.755 1.755 0 110-3.51 1.755 1.755 0 010 3.51zM27.35 19.988a3.855 3.855 0 00-2.805-3.706V1.05a1.05 1.05 0 10-2.1 0v15.232a3.848 3.848 0 000 7.41v2.25a1.05 1.05 0 002.1 0v-2.25a3.855 3.855 0 002.805-3.704zm-3.855 1.762a1.754 1.754 0 110-3.509 1.754 1.754 0 010 3.509zM9.822 7.013a3.856 3.856 0 002.805 3.704V25.95a1.05 1.05 0 002.1 0V10.718a3.848 3.848 0 000-7.41v-2.25a1.05 1.05 0 00-2.1 0v2.25a3.855 3.855 0 00-2.805 3.705zm3.855-1.763a1.755 1.755 0 110 3.51 1.755 1.755 0 010-3.51z"
        fill={props.backgroundColor}
      />
    </Svg>
  );
}

export default SvgComponent;
