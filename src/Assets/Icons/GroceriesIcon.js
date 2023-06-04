import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const GroceriesIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#C8E6C9" />
    <G clipPath="url(#clip0_89_811)">
      <Path
        d="M30 17H25.21L20.83 10.44C20.64 10.16 20.32 10.02 20 10.02C19.68 10.02 19.36 10.16 19.17 10.45L14.79 17H10C9.45 17 9 17.45 9 18C9 18.09 9.01 18.18 9.04 18.27L11.58 27.54C11.81 28.38 12.58 29 13.5 29H26.5C27.42 29 28.19 28.38 28.43 27.54L30.97 18.27L31 18C31 17.45 30.55 17 30 17ZM20 12.8L22.8 17H17.2L20 12.8ZM26.5 27L13.51 27.01L11.31 19H28.7L26.5 27ZM20 21C18.9 21 18 21.9 18 23C18 24.1 18.9 25 20 25C21.1 25 22 24.1 22 23C22 21.9 21.1 21 20 21Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_89_811">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default GroceriesIcon;