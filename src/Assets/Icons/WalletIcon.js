import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const WalletIcon = (props) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_157_227)">
            <Path
                d="M21.875 7.583V5.208c0 -1.146 -0.938 -2.083 -2.083 -2.083H5.208a2.083 2.083 0 0 0 -2.083 2.083v14.583a2.083 2.083 0 0 0 2.083 2.083h14.583c1.146 0 2.083 -0.938 2.083 -2.083V17.417a2.083 2.083 0 0 0 1.042 -1.792v-6.25a2.083 2.083 0 0 0 -1.042 -1.792ZM20.833 9.375v6.25h-7.292v-6.25H20.833ZM5.208 19.792V5.208h14.583v2.083h-6.25a2.089 2.089 0 0 0 -2.083 2.083v6.25c0 1.146 0.938 2.083 2.083 2.083h6.25v2.083H5.208Z"
                fill="#757575"
            />
            <Path
                d="M16.667 14.063a1.563 1.563 0 1 0 0 -3.125 1.563 1.563 0 0 0 0 3.125Z"
                fill="#757575"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_157_227">
                <Path width={24} height={24} fill="white" d="M0 0h25v25H0V0z" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default WalletIcon;