import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const SmallOutlineIcon = (props) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_803_3183)">
      <Path
        d="M15 2.25h-0.749V0.75h-1.501V2.25H5.25V0.75H3.75V2.25h-0.749c-0.826 0 -1.501 0.675 -1.501 1.5V15.75c0 0.825 0.675 1.5 1.501 1.5h11.999c0.826 0 1.501 -0.675 1.501 -1.5V3.75c0 -0.825 -0.675 -1.5 -1.501 -1.5Zm0 13.5H3V7.5h11.999V15.75Zm0 -9.75H3v-2.25h11.999v2.25Z"
        fill="#757575"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_803_3183">
        <Path width={16} height={16} fill="white" d="M0 0H18V18H0V0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SmallOutlineIcon;