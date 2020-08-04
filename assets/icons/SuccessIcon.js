import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SuccessIcon(props) {
  return (
    <Svg width={120} height={69} viewBox="0 0 120 69" fill="none" {...props}>
      <Path
        d="M90.787 7.255L83.51 0 50.787 32.622l7.278 7.255L90.787 7.255zM112.671 0L58.064 54.438 36.49 32.983l-7.277 7.255L58.065 69 120 7.255 112.671 0zM0 40.237L28.852 69l7.277-7.255-28.8-28.763L0 40.237z"
        fill="#1AA63F"
      />
    </Svg>
  );
}

export default SuccessIcon;
