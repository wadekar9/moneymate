import * as React from "react";
import Svg, { Path } from "react-native-svg";

const RightChevronIcon = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M6.48999 20.13L8.25999 21.9L18.16 12L8.25999 2.10001L6.48999 3.87001L14.62 12L6.48999 20.13V20.13Z"
            fill="black"
            fillOpacity={0.54}
        />
    </Svg>
);

export default RightChevronIcon;