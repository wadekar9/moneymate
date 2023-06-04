import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const DonationIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#FFF9C4" />
    <G clipPath="url(#clip0_256_1849)">
      <Path
        d="M24 21C27.09 18.19 30 15.56 30 13.3C30 11.45 28.55 10 26.7 10C25.66 10 24.65 10.49 24 11.25C23.34 10.49 22.34 10 21.3 10C19.45 10 18 11.45 18 13.3C18 15.56 20.91 18.19 24 21ZM21.3 12C21.74 12 22.19 12.21 22.48 12.55L24 14.34L25.52 12.55C25.81 12.21 26.26 12 26.7 12C27.44 12 28 12.56 28 13.3C28 14.42 25.96 16.47 24 18.29C22.04 16.47 20 14.41 20 13.3C20 12.56 20.56 12 21.3 12Z"
        fill="#424242"
      />
      <Path
        d="M27 24H25C25 22.8 24.25 21.72 23.13 21.3L16.97 19H9V30H15V28.56L22 30.5L30 28V27C30 25.34 28.66 24 27 24ZM11 28V21H13V28H11ZM21.97 28.41L15 26.48V21H16.61L22.43 23.17C22.77 23.3 23 23.63 23 24C23 24 21.01 23.95 20.7 23.85L18.32 23.06L17.69 24.96L20.07 25.75C20.58 25.92 21.11 26.01 21.65 26.01H27C27.39 26.01 27.74 26.24 27.9 26.57L21.97 28.41Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_256_1849">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default DonationIcon;