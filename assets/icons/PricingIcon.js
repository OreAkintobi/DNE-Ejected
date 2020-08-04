import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function PricingIcon(props) {
  return (
    <Svg width={64} height={64} viewBox="0 0 64 61" fill="none" {...props}>
      <G filter="url(#prefix__filter0_d)">
        <Circle
          cx={32}
          cy={28}
          r={28}
          transform="rotate(-90 32 28)"
          fill={props.background}
        />
        <Path
          d="M45.893 12h-11.07a1.107 1.107 0 00-.785.321l-17.71 17.71a1.109 1.109 0 000 1.572l11.069 11.07a1.108 1.108 0 001.571 0L46.68 24.962a1.107 1.107 0 00.321-.786v-11.07A1.107 1.107 0 0045.893 12zM32.61 31.924h-1.749l1.24 1.24a1.111 1.111 0 11-1.572 1.572l-1.24-1.24v1.75a1.107 1.107 0 11-2.213 0v-1.75l-1.24 1.24a1.11 1.11 0 01-1.897-.786 1.11 1.11 0 01.325-.786l.786-.786.454-.454h-1.75a1.107 1.107 0 010-2.213h1.75l-1.24-1.24a1.112 1.112 0 011.572-1.572l1.24 1.24v-1.75a1.107 1.107 0 012.213 0v1.75l1.24-1.24a1.111 1.111 0 111.572 1.572l-1.24 1.24h1.75a1.107 1.107 0 110 2.213zm6.642-8.855a3.32 3.32 0 110-6.641 3.32 3.32 0 010 6.641zm0-4.427a1.107 1.107 0 100 2.214 1.107 1.107 0 000-2.215z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default PricingIcon;
