import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DragIcon = (props) => (
    <Svg
        width="40px"
        height="40px"
        viewBox="0 0 0.8 0.8"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M0.102 0.4A0.05 0.05 0 0 1 0.15 0.35h0.502a0.05 0.05 0 1 1 0 0.102H0.15A0.05 0.05 0 0 1 0.102 0.4z"
            fill="#BDBDBD"
        />
    </Svg>
);

export default DragIcon;