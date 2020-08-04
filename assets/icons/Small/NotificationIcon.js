import * as React from "react";
import Svg, { Path } from "react-native-svg";

function NotificationIcon(props) {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <Path
        d="M24.894 24.142a1.389 1.389 0 00-.301-1.513l-2.371-2.371V12.5c0-4.888-3.63-8.933-8.333-9.611v-1.5a1.39 1.39 0 00-2.778 0v1.5c-4.704.678-8.333 4.723-8.333 9.61v7.759l-2.37 2.37A1.389 1.389 0 001.388 25h22.222c.561 0 1.068-.34 1.283-.858zm-20.152-1.92l.407-.407c.26-.26.407-.614.407-.982V12.5A6.952 6.952 0 0112.5 5.555a6.952 6.952 0 016.944 6.945v8.333c0 .368.146.722.407.982l.407.407H4.742z"
        fill="#000"
      />
    </Svg>
  );
}

export default NotificationIcon;
