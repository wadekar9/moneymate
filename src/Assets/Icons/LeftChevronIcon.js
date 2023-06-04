import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LeftChevronIcon = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M17.51 3.87L15.74 2.09999L5.84001 12L15.74 21.9L17.51 20.13L9.38001 12L17.51 3.87V3.87Z"
            fill="black"
            fillOpacity={0.54}
        />
    </Svg>
);

export default LeftChevronIcon;