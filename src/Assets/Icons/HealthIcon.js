import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const HealthIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#F8BBD0" />
    <G clipPath="url(#clip0_89_815)">
      <Path
        d="M18.5 21H16V18H18.5V15.5H21.5V18H24V21H21.5V23.5H18.5V21ZM20 10L12 13V19.09C12 24.14 15.41 28.85 20 30C24.59 28.85 28 24.14 28 19.09V13L20 10ZM26 19.09C26 23.09 23.45 26.79 20 27.92C16.55 26.79 14 23.1 14 19.09V14.39L20 12.14L26 14.39V19.09Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_89_815">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default HealthIcon;