import Device from "../libs/responsiveImage/device";

export default function applyScale(size) {
  return Math.ceil(size * Device.scale);
}
