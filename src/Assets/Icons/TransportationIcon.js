import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const TransportationIcon = (props) => (
    <Svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={20} cy={20} r={20} fill="#B2EBF2" />
        <Path
            d="M25 14H11C9.9 14 9 14.89 9 16V25H11C11 26.65 12.34 28 14 28C15.66 28 17 26.65 17 25H22.5C22.5 26.65 23.84 28 25.5 28C27.16 28 28.5 26.65 28.5 25H31V20L25 14ZM11 20V16H15V20H11ZM14 26.5C13.17 26.5 12.5 25.83 12.5 25C12.5 24.17 13.17 23.5 14 23.5C14.83 23.5 15.5 24.17 15.5 25C15.5 25.83 14.83 26.5 14 26.5ZM21 20H17V16H21V20ZM25.5 26.5C24.67 26.5 24 25.83 24 25C24 24.17 24.67 23.5 25.5 23.5C26.33 23.5 27 24.17 27 25C27 25.83 26.33 26.5 25.5 26.5ZM23 20V16H24L28 20H23Z"
            fill="#424242"
        />
    </Svg>
);

export default TransportationIcon;