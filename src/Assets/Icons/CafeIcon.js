import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const CafeIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#FFECB3" />
    <Path
      d="M12 27H28V29H12V27ZM28 11H12V21C12 23.21 13.79 25 16 25H22C24.21 25 26 23.21 26 21V18H28C29.11 18 30 17.1 30 16V13C30 11.89 29.11 11 28 11ZM24 21C24 22.1 23.1 23 22 23H16C14.9 23 14 22.1 14 21V13H24V21ZM28 16H26V13H28V16Z"
      fill="#424242"
    />
  </Svg>
);

export default CafeIcon;