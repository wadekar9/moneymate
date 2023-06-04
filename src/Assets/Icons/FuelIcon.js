import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const FuelIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#D7CCC8" />
    <G clipPath="url(#clip0_157_68)">
      <Path
        d="M27.77 15.23L27.78 15.22L24.06 11.5L23 12.56L25.11 14.67C24.17 15.03 23.5 15.93 23.5 17C23.5 18.38 24.62 19.5 26 19.5C26.36 19.5 26.69 19.42 27 19.29V26.5C27 27.05 26.55 27.5 26 27.5C25.45 27.5 25 27.05 25 26.5V22C25 20.9 24.1 20 23 20H22V13C22 11.9 21.1 11 20 11H14C12.9 11 12 11.9 12 13V29H22V21.5H23.5V26.5C23.5 27.88 24.62 29 26 29C27.38 29 28.5 27.88 28.5 26.5V17C28.5 16.31 28.22 15.68 27.77 15.23ZM20 21.5V27H14V20H20V21.5ZM20 18H14V13H20V18ZM26 18C25.45 18 25 17.55 25 17C25 16.45 25.45 16 26 16C26.55 16 27 16.45 27 17C27 17.55 26.55 18 26 18Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_157_68">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default FuelIcon;