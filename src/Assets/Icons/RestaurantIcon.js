import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const RestaurantIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#C5CAE9" />
    <G clipPath="url(#clip0_157_69)">
      <Path
        d="M24 14V22H27V30H29V10C26.24 10 24 12.24 24 14ZM19 17H17V10H15V17H13V10H11V17C11 19.21 12.79 21 15 21V30H17V21C19.21 21 21 19.21 21 17V10H19V17Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_157_69">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default RestaurantIcon;