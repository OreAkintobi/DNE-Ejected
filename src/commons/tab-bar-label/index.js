import React from "react";
import { theme } from "../../theme/types";

import { Label } from "./styles";

export default function TabBarLabel(props) {
  const { fonts, colors } = theme;
  const { label, focused, color } = props;

  return (
    <Label
      style={{
        fontFamily: focused ? fonts.RobotoMedium : fonts.RobotoRegular,
        fontSize: focused ? 12 : 11,
        color,
      }}
    >
      {label}
    </Label>
  );
}
