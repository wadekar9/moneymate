import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const HomeFillIcon = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_28_248)">
            <Path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#616161" />
        </G>
        <Defs>
            <ClipPath id="clip0_28_248">
                <Rect width={24} height={24} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default HomeFillIcon;