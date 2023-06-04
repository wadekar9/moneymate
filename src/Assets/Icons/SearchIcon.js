import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const SearchIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_89_1168)">
      <Path
        d="M19.375 17.5h-0.988l-0.35 -0.337a8.089 8.089 0 0 0 1.964 -5.287 8.125 8.125 0 1 0 -8.126 8.126 8.086 8.086 0 0 0 5.287 -1.963l0.337 0.35v0.988l6.25 6.238 1.863 -1.863 -6.238 -6.25Zm-7.5 0c-3.112 0 -5.625 -2.513 -5.625 -5.625s2.513 -5.625 5.625 -5.625 5.625 2.513 5.625 5.625 -2.513 5.625 -5.625 5.625Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_89_1168">
        <Path width={24} height={24} fill="white" d="M0 0h30v30H0V0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SearchIcon;