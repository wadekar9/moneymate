import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const MoneyIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#FFCCBC" />
    <G clipPath="url(#clip0_256_1847)">
      <Path
        d="M19.8001 18.9C17.5301 18.31 16.8001 17.7 16.8001 16.75C16.8001 15.66 17.8101 14.9 19.5001 14.9C21.2801 14.9 21.9401 15.75 22.0001 17H24.2101C24.1401 15.28 23.0901 13.7 21.0001 13.19V11H18.0001V13.16C16.0601 13.58 14.5001 14.84 14.5001 16.77C14.5001 19.08 16.4101 20.23 19.2001 20.9C21.7001 21.5 22.2001 22.38 22.2001 23.31C22.2001 24 21.7101 25.1 19.5001 25.1C17.4401 25.1 16.6301 24.18 16.5201 23H14.3201C14.4401 25.19 16.0801 26.42 18.0001 26.83V29H21.0001V26.85C22.9501 26.48 24.5001 25.35 24.5001 23.3C24.5001 20.46 22.0701 19.49 19.8001 18.9Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_256_1847">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MoneyIcon;