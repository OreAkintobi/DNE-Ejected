import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FundIconSmall(props) {
  return (
    <Svg width={24} height={16} viewBox="0 0 24 16" fill="none" {...props}>
      <Path
        d="M23.556 2.222H4.444A.444.444 0 004 2.667v1.777H2.667a1.778 1.778 0 110-3.555h15.555a.445.445 0 000-.889H2.667A2.67 2.67 0 000 2.667v10.222a2.67 2.67 0 002.667 2.667h14.666a.445.445 0 00.445-.445v-2.667h5.778A.442.442 0 0024 12V2.667a.445.445 0 00-.444-.445zm-.445 9.334h-5.333V4.889a.445.445 0 00-.445-.445H4.89V3.111H23.11v8.445z"
        fill="#000"
      />
    </Svg>
  );
}

export default FundIconSmall;
