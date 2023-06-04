import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SecondaryChevronIcon = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M10.0001 6L8.59009 7.41L13.1701 12L8.59009 16.59L10.0001 18L16.0001 12L10.0001 6Z"
            fill="#BDBDBD"
        />
    </Svg>
);

export default SecondaryChevronIcon;