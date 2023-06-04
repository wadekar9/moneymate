import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const CashIcon = (props) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_157_218)">
            <Path
                d="M19.792 14.583V6.25c0 -1.146 -0.938 -2.083 -2.083 -2.083H3.125c-1.146 0 -2.083 0.938 -2.083 2.083v8.333c0 1.146 0.938 2.083 2.083 2.083h14.583c1.146 0 2.083 -0.938 2.083 -2.083Zm-2.083 0H3.125V6.25h14.583v8.333Zm-7.292 -7.292c-1.729 0 -3.125 1.396 -3.125 3.125s1.396 3.125 3.125 3.125 3.125 -1.396 3.125 -3.125 -1.396 -3.125 -3.125 -3.125Zm13.542 0v11.458c0 1.146 -0.938 2.083 -2.083 2.083H4.167v-2.083h17.708V7.292h2.083Z"
                fill="#757575"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_157_218">
                <Path width={24} height={24} fill="white" d="M0 0H25V25H0V0z" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default CashIcon;