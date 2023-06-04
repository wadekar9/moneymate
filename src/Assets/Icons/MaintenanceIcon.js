import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const MaintenanceIcon = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#B39DDB" />
    <G clipPath="url(#clip0_157_71)">
      <Path
        d="M23.904 21.0506L21.7827 23.1719L27.7789 29.1681L29.9002 27.0468L23.904 21.0506Z"
        fill="#424242"
      />
      <Path
        d="M25.5001 18C27.4301 18 29.0001 16.43 29.0001 14.5C29.0001 13.92 28.8401 13.38 28.5901 12.9L25.8901 15.6L24.4001 14.11L27.1001 11.41C26.6201 11.16 26.0801 11 25.5001 11C23.5701 11 22.0001 12.57 22.0001 14.5C22.0001 14.91 22.0801 15.3 22.2101 15.66L20.3601 17.51L18.5801 15.73L19.2901 15.02L17.8801 13.61L20.0001 11.49C18.8301 10.32 16.9301 10.32 15.7601 11.49L12.2201 15.03L13.6301 16.44H10.8101L10.1001 17.15L13.6401 20.69L14.3501 19.98V17.15L15.7601 18.56L16.4701 17.85L18.2501 19.63L10.8401 27.04L12.9601 29.16L24.3401 17.79C24.7001 17.92 25.0901 18 25.5001 18Z"
        fill="#424242"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_157_71">
        <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MaintenanceIcon;