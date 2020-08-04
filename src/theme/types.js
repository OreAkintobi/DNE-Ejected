const fonts = {
  RobotoBlack: "Roboto-Black",
  RobotoBlackItalic: "Roboto-BlackItalic",
  RobotoBold: "Roboto-Bold",
  RobotoBoldItalic: "Roboto-BoldItalic",
  RobotoItalic: "Roboto-Italic",
  RobotoLight: "Roboto-Light",
  RobotoLightItalic: "Roboto-LightItalic",
  RobotoMedium: "Roboto-Medium",
  RobotoMediumItalic: "Roboto-MediumItalic",
  RobotoRegular: "Roboto-Regular",
  RobotoThin: "Roboto-Thin",
  RobotoThinItalic: "Roboto-ThinItalic",
};

const sizes = {
  FONT_SMALL_SIZE: 10,
  FONT_MEDIUM_SIZE: 12,
  FONT_LARGE_SIZE: 15,
};

const colors = {
  DARK_TEXT: "#000000",
  LIGHT_GRAY: "#EAEAEA",
  MEDIUM_GRAY: "#979797",
  DARK_GRAY: "#6D6D6D",
  BLUE_LINK_TEXT: "#002FD3",
  COLOR_WHITE: "#FFFFFF",
  LIGHT_RED: "#FF0000",
  DARK_COLOR_LOW_OPACITY: "rgba(0, 0, 0, 0.1)",
};

export const defaultTheme = {
  primary: colors.DARK_GRAY,
  secondary: colors.DARK_TEXT,
};

export const theme = { colors, sizes, fonts };
