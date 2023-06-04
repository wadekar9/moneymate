import * as React from "react";
import Svg, { Path } from "react-native-svg";

const EyeIcon = (props) => (
    <Svg
        fill="#616161"
        width="25px"
        height="25px"
        viewBox="0 0 1.125 1.125"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <Path
            d="M1.051 0.548c-0.105 -0.195 -0.29 -0.313 -0.494 -0.313S0.167 0.353 0.063 0.548l-0.009 0.015 0.008 0.015c0.105 0.195 0.29 0.313 0.494 0.313s0.389 -0.116 0.494 -0.313l0.008 -0.015Zm-0.494 0.278C0.38 0.826 0.219 0.728 0.125 0.563c0.094 -0.165 0.255 -0.263 0.431 -0.263S0.892 0.398 0.987 0.563c-0.095 0.165 -0.255 0.263 -0.431 0.263Z"
            className="clr-i-outline clr-i-outline-path-1"
        />
        <Path
            d="M0.565 0.349A0.214 0.214 0 1 0 0.781 0.563a0.214 0.214 0 0 0 -0.216 -0.213Zm0 0.366A0.152 0.152 0 1 1 0.719 0.563a0.152 0.152 0 0 1 -0.153 0.153Z"
            className="clr-i-outline clr-i-outline-path-2"
        />
        <Path
            x={0}
            y={0}
            width={36}
            height={36}
            fillOpacity={0}
            d="M0 0H1.125V1.125H0V0z"
        />
    </Svg>
);

export default EyeIcon;