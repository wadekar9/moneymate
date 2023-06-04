import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const SavingsIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#FFECB3" />
    <G clipPath="url(#clip0_256_1850)">
      <Path
        d="M23 18C23 17.45 23.45 17 24 17C24.55 17 25 17.45 25 18C25 18.55 24.55 19 24 19C23.45 19 23 18.55 23 18ZM16 17H21V15H16V17ZM30 15.5V22.47L27.18 23.41L25.5 29H20V27H18V29H12.5C12.5 29 10 20.54 10 17.5C10 14.46 12.46 12 15.5 12H20.5C21.41 10.79 22.86 10 24.5 10C25.33 10 26 10.67 26 11.5C26 11.71 25.96 11.9 25.88 12.08C25.74 12.42 25.62 12.81 25.56 13.23L27.83 15.5H30ZM28 17.5H27L23.5 14C23.5 13.35 23.59 12.71 23.76 12.09C22.79 12.34 22 13.06 21.67 14H15.5C13.57 14 12 15.57 12 17.5C12 19.38 13.22 24.15 14.01 27H16V25H22V27H24.01L25.56 21.85L28 21.03V17.5Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_256_1850">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SavingsIcon;