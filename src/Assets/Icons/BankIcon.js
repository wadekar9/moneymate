import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const BankIcon = (props) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_157_235)">
            <Path
                d="M6.771 10.417h-2.083v7.292h2.083v-7.292Zm6.25 0h-2.083v7.292h2.083v-7.292Zm8.854 9.375H2.083v2.083h19.792v-2.083Zm-2.604 -9.375h-2.083v7.292h2.083v-7.292Zm-7.292 -7.021L17.406 6.25H6.552l5.427 -2.854Zm0 -2.354L2.083 6.25v2.083h19.792V6.25l-9.896 -5.208Z"
                fill="#757575"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_157_235">
                <Path width={24} height={24} fill="white" d="M0 0H25V25H0V0z" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default BankIcon;