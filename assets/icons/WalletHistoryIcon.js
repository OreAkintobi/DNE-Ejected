import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function WalletHistoryIcon(props) {
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
          d="M36.826 18.644v-.964a2.684 2.684 0 00-2.68-2.68H18.68A2.684 2.684 0 0016 17.68v.964h20.826zM16 21.204v5.195a2.683 2.683 0 002.68 2.681h15.466a2.684 2.684 0 002.68-2.68v-5.196H16zm3.473 5.136v-2.56h8.011v2.56h-8.01zM26.023 42.427l-4.573-4.573v3.293h-.128a2.765 2.765 0 01-2.762-2.762v-6.332H16v6.332a5.328 5.328 0 005.322 5.322h.128V47l4.573-4.573zM48 36.564V35.6a2.683 2.683 0 00-2.68-2.68H29.853a2.684 2.684 0 00-2.68 2.68v.964H48zM27.174 39.124v5.195A2.684 2.684 0 0029.854 47H45.32A2.684 2.684 0 0048 44.32v-5.196H27.174zm3.473 5.135V41.7h5.77v2.56h-5.77zM37.977 19.573l4.573 4.573v-3.293h.128a2.765 2.765 0 012.762 2.762v6.332H48v-6.332a5.328 5.328 0 00-5.322-5.322h-.128V15l-4.573 4.573z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default WalletHistoryIcon;
