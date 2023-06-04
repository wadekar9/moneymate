import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const ElectronicsIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#FFCDD2" />
    <G clipPath="url(#clip0_89_813)">
      <Path
        d="M29 11H11C9.9 11 9 11.9 9 13V25C9 26.1 9.9 27 11 27H16V29H24V27H29C30.1 27 30.99 26.1 30.99 25L31 13C31 11.9 30.1 11 29 11ZM29 25H11V13H29V25Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_89_813">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ElectronicsIcon;