import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const LiquorIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#DCEDC8" />
    <G clipPath="url(#clip0_156_231)">
      <Path
        d="M11 22C11 23.3 11.84 24.4 13 24.82V28H11V30H17V28H15V24.82C16.16 24.4 17 23.3 17 22V14H11V22ZM13 16H15V19H13V16ZM13 21H15V22C15 22.55 14.55 23 14 23C13.45 23 13 22.55 13 22V21Z"
        fill="#424242"
      />
      <Path
        d="M28.64 16.54L27.68 16.22C27.27 16.08 27 15.7 27 15.27V11C27 10.45 26.55 10 26 10H23C22.45 10 22 10.45 22 11V15.28C22 15.71 21.73 16.09 21.32 16.23L20.36 16.55C19.55 16.83 19 17.59 19 18.45V28C19 29.1 19.9 30 21 30H28C29.1 30 30 29.1 30 28V18.44C30 17.58 29.45 16.82 28.64 16.54ZM24 12H25V13H24V12ZM28 28H21V26H28V28ZM28 24H21V22H28V24ZM28 20H21V18.44L21.95 18.12C23.18 17.72 24 16.57 24 15.28V15H25V15.28C25 16.57 25.82 17.72 27.05 18.13L28 18.44V20Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_156_231">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default LiquorIcon;