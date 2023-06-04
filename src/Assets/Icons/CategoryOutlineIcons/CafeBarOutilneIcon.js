import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CafeBarOutlineIcon = (props) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M3.33334 15.8333H16.6667V17.5H3.33334V15.8333ZM16.6667 2.5H3.33334V10.8333C3.33334 12.675 4.82501 14.1667 6.66668 14.1667H11.6667C13.5083 14.1667 15 12.675 15 10.8333V8.33333H16.6667C17.5917 8.33333 18.3333 7.58333 18.3333 6.66667V4.16667C18.3333 3.24167 17.5917 2.5 16.6667 2.5ZM13.3333 10.8333C13.3333 11.75 12.5833 12.5 11.6667 12.5H6.66668C5.75001 12.5 5.00001 11.75 5.00001 10.8333V4.16667H13.3333V10.8333ZM16.6667 6.66667H15V4.16667H16.6667V6.66667Z"
            fill="#757575"
        />
    </Svg>
);

export default CafeBarOutlineIcon;