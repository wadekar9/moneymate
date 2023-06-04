import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const InstitueIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#FFE0B2" />
    <G clipPath="url(#clip0_256_1848)">
      <Path
        d="M14.5 18H12.5V25H14.5V18ZM20.5 18H18.5V25H20.5V18ZM29 27H10V29H29V27ZM26.5 18H24.5V25H26.5V18ZM19.5 11.26L24.71 14H14.29L19.5 11.26ZM19.5 9L10 14V16H29V14L19.5 9Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_256_1848">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default InstitueIcon;