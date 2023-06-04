import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const SportsIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#E6EE9C" />
    <G clipPath="url(#clip0_157_70)">
      <Path
        d="M20 10C14.48 10 10 14.48 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20C30 14.48 25.52 10 20 10ZM13.61 24.78C12.6 23.45 12 21.8 12 20C12 18.2 12.6 16.55 13.61 15.22C15.06 16.31 16 18.05 16 20C16 21.95 15.06 23.69 13.61 24.78ZM20 28C18.11 28 16.37 27.34 15 26.24C16.83 24.77 18 22.53 18 20C18 17.47 16.83 15.23 15 13.76C16.37 12.66 18.11 12 20 12C21.89 12 23.63 12.66 25 13.76C23.17 15.23 22 17.47 22 20C22 22.53 23.17 24.77 25 26.24C23.63 27.34 21.89 28 20 28ZM26.39 24.78C24.94 23.69 24 21.95 24 20C24 18.05 24.94 16.31 26.39 15.22C27.4 16.55 28 18.2 28 20C28 21.8 27.4 23.45 26.39 24.78Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_157_70">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SportsIcon;