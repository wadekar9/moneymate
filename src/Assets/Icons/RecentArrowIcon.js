import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const RecentArrowIcon = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_93_832)">
            <Path
                d="M5 15H7V8.41L18.59 20L20 18.59L8.41 7H15V5H5V15Z"
                fill="#757575"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_93_832">
                <Rect width={24} height={24} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default RecentArrowIcon;