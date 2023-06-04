import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const EducationIcon = (props) => (
    <Svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={20} cy={20} r={20} fill="#F0F4C3" />
        <G clipPath="url(#clip0_157_72)">
            <Path
                d="M20 11L9 17L13 19.18V25.18L20 29L27 25.18V19.18L29 18.09V25H31V17L20 11ZM26.82 17L20 20.72L13.18 17L20 13.28L26.82 17ZM25 23.99L20 26.72L15 23.99V20.27L20 23L25 20.27V23.99Z"
                fill="#424242"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_157_72">
                <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default EducationIcon;