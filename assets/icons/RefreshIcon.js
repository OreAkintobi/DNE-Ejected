import * as React from "react";
import Svg, { Path } from "react-native-svg";

function RefreshIcon(props) {
  return (
    <Svg width={22} height={16} viewBox="0 0 22 16" fill="none" {...props}>
      <Path
        d="M18 4l-4 4h3c0 3.31-2.69 6-6 6a5.87 5.87 0 01-2.8-.7l-1.46 1.46A7.93 7.93 0 0011 16c4.42 0 8-3.58 8-8h3l-4-4zM5 8c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0011 0C6.58 0 3 3.58 3 8H0l4 4 4-4H5z"
        fill="#fff"
      />
    </Svg>
  );
}

export default RefreshIcon;
