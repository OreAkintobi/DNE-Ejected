import { WToast } from "react-native-smart-tip";
import { theme } from "../../theme/types";

const ShowToast = ({ bgColor, message, toastIcon, duration = false }) => {
  const toastOpts = {
    data: message,
    textColor: theme.colors.COLOR_WHITE,
    backgroundColor: theme.colors.DARK_TEXT,
    duration: duration ? WToast.duration.LONG : WToast.duration.SHORT, //1.SHORT 2.LONG
    position: WToast.position.CENTER, // 1.TOP 2.CENTER 3.BOTTOM
    icon: toastIcon,
  };

  WToast.show(toastOpts);
};

export default ShowToast;
