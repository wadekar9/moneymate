import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const LaundryIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#B3E5FC" />
    <G clipPath="url(#clip0_156_211)">
      <Path
        d="M26 10.01L14 10C12.89 10 12 10.89 12 12V28C12 29.11 12.89 30 14 30H26C27.11 30 28 29.11 28 28V12C28 10.89 27.11 10.01 26 10.01ZM26 28H14L13.99 12H26V28Z"
        fill="#424242"
      />
      <Path
        d="M16 15C16.5523 15 17 14.5523 17 14C17 13.4477 16.5523 13 16 13C15.4477 13 15 13.4477 15 14C15 14.5523 15.4477 15 16 15Z"
        fill="#424242"
      />
      <Path
        d="M19 15C19.5523 15 20 14.5523 20 14C20 13.4477 19.5523 13 19 13C18.4477 13 18 13.4477 18 14C18 14.5523 18.4477 15 19 15Z"
        fill="#424242"
      />
      <Path
        d="M20 27C22.76 27 25 24.76 25 22C25 19.24 22.76 17 20 17C17.24 17 15 19.24 15 22C15 24.76 17.24 27 20 27ZM22.36 19.64C23.66 20.94 23.66 23.06 22.36 24.36C21.06 25.66 18.94 25.66 17.64 24.36L22.36 19.64Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_156_211">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default LaundryIcon;