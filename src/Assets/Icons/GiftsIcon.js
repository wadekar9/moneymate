import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const GiftIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#E1BEE7" />
    <G clipPath="url(#clip0_89_814)">
      <Path
        d="M28 14H25.82C25.93 13.69 26 13.35 26 13C26 11.34 24.66 10 23 10C21.95 10 21.04 10.54 20.5 11.35L20 12.02L19.5 11.34C18.96 10.54 18.05 10 17 10C15.34 10 14 11.34 14 13C14 13.35 14.07 13.69 14.18 14H12C10.89 14 10.01 14.89 10.01 16L10 27C10 28.11 10.89 29 12 29H28C29.11 29 30 28.11 30 27V16C30 14.89 29.11 14 28 14ZM23 12C23.55 12 24 12.45 24 13C24 13.55 23.55 14 23 14C22.45 14 22 13.55 22 13C22 12.45 22.45 12 23 12ZM17 12C17.55 12 18 12.45 18 13C18 13.55 17.55 14 17 14C16.45 14 16 13.55 16 13C16 12.45 16.45 12 17 12ZM28 27H12V25H28V27ZM28 22H12V16H17.08L15 18.83L16.62 20L20 15.4L23.38 20L25 18.83L22.92 16H28V22Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_89_814">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default GiftIcon;