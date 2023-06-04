import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const DownloadIcon = (props) => (
  <Svg
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_822_1262)">
      <Path
        d="M15.5 12.5V15H5.50004V12.5H3.83337V15C3.83337 15.9167 4.58337 16.6667 5.50004 16.6667H15.5C16.4167 16.6667 17.1667 15.9167 17.1667 15V12.5H15.5ZM14.6667 9.16666L13.4917 7.99166L11.3334 10.1417V3.33333H9.66671V10.1417L7.50837 7.99166L6.33337 9.16666L10.5 13.3333L14.6667 9.16666Z"
        fill="#FAFAFA"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_822_1262">
        <Rect width={20} height={20} fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default DownloadIcon;