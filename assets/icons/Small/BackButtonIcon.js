import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BackButtonIcon(props) {
  return (
    <Svg width={20} height={14} viewBox="0 0 20 14" fill="none" {...props}>
      <Path
        d="M.075 7.4c.1.1.1.2.2.3l6 6c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L3.375 8h15.6c.6 0 1-.4 1-1s-.4-1-1-1h-15.6l4.3-4.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-6 6c-.1.1-.2.2-.2.3-.1.3-.1.5 0 .8z"
        fill={props.backgroundColor}
      />
    </Svg>
  );
}

export default BackButtonIcon;
