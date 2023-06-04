import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const SelfDevelopmentIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#CFD8DC" />
    <G clipPath="url(#clip0_157_73)">
      <Path
        d="M20 16C21.1046 16 22 15.1046 22 14C22 12.8954 21.1046 12 20 12C18.8954 12 18 12.8954 18 14C18 15.1046 18.8954 16 20 16Z"
        fill="#424242"
      />
      <Path
        d="M29 24V22C26.76 22 24.84 21.04 23.4 19.32L22.06 17.72C21.68 17.26 21.12 17 20.53 17H19.48C18.89 17 18.33 17.26 17.95 17.72L16.61 19.32C15.16 21.04 13.24 22 11 22V24C13.77 24 16.19 22.83 18 20.75V23L14.12 24.55C13.45 24.82 13 25.48 13 26.21C13 27.2 13.8 28 14.79 28H17V27.5C17 26.12 18.12 25 19.5 25H22.5C22.78 25 23 25.22 23 25.5C23 25.78 22.78 26 22.5 26H19.5C18.67 26 18 26.67 18 27.5V28H25.21C26.2 28 27 27.2 27 26.21C27 25.48 26.55 24.82 25.88 24.55L22 23V20.75C23.81 22.83 26.23 24 29 24Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_157_73">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SelfDevelopmentIcon;