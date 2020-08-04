import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FailureIcon(props) {
  return (
    <Svg width={110} height={110} viewBox="0 0 110 110" fill="none" {...props}>
      <Path
        d="M49.5 71.5h11v11h-11v-11zm0-44h11v33h-11v-33zM54.945 0C24.585 0 0 24.64 0 55s24.585 55 54.945 55C85.36 110 110 85.36 110 55S85.36 0 54.945 0zM55 99c-24.31 0-44-19.69-44-44s19.69-44 44-44 44 19.69 44 44-19.69 44-44 44z"
        fill="red"
      />
    </Svg>
  );
}

export default FailureIcon;
