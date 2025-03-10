import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PersonProfileIcon(props) {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
      <Path
        d="M15 0C6.72 0 0 6.72 0 15c0 8.28 6.72 15 15 15 8.28 0 15-6.72 15-15 0-8.28-6.72-15-15-15zm0 4.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5-4.5-2.01-4.5-4.5 2.01-4.5 4.5-4.5zm0 21.3a10.8 10.8 0 01-9-4.83c.045-2.985 6-4.62 9-4.62 2.985 0 8.955 1.635 9 4.62a10.8 10.8 0 01-9 4.83z"
        fill={props.backgroundColor}
      />
    </Svg>
  );
}

export default PersonProfileIcon;
