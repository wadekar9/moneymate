import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const BlueCheckedIcon = (props) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_862_1428)">
            <Path
                d="M7.50001 13.4751L4.02501 10.0001L2.84167 11.1751L7.50001 15.8334L17.5 5.83345L16.325 4.65845L7.50001 13.4751Z"
                fill="#006ADD"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_862_1428">
                <Rect width={20} height={20} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default BlueCheckedIcon;