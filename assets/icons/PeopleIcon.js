import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function PeopleIcon(props) {
  return (
    <Svg width={64} height={64} viewBox="0 0 64 64" fill="none" {...props}>
      <G filter="url(#prefix__filter0_d)">
        <Circle
          cx={32}
          cy={31}
          r={28}
          transform="rotate(-90 32 31)"
          fill={props.background}
        />
        <Path
          d="M37.504 39.783c0-2.325-.11-4.536-2.323-4.757-7.303-1.108-6.762-4.316-6.87-5.201 2.26-1.242 3.108-6.418 3.108-6.418C31.419 18.097 29.095 15 25 15c-4.095 0-6.639 2.874-6.639 7.745 0 5.466 3.254 6.89 3.254 6.89 0 3.651-3.254 4.726-6.463 5.722-3.208.995-1.88 4.426-1.88 4.426.18.13 5.84 7.587 18.777 7.856 3.234 0 5.48-.36 5.48-.36l-.026-7.496z"
          fill="#fff"
        />
        <Path
          d="M51 39.706c0-2.003-.095-3.908-2.001-4.1-6.292-.953-5.825-3.716-5.92-4.48 1.949-1.07 2.679-5.527 2.679-5.527 0-4.576-2.003-7.244-5.53-7.244-3.526 0-5.718 2.479-5.718 6.672 0 4.708 2.802 5.937 2.802 5.937.013 1.412-.584 2.232-1.18 2.606 0 0 2.387.586 2.984 2.61.454 1.542.297 3.526.297 3.526l-.267 7.484S46.952 45.966 51 39.706z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default PeopleIcon;
