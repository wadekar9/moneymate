import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PlusCircleIcon = (props) => (
    <Svg
        width={30}
        height={30}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M15 3C8.376 3 3 8.376 3 15S8.376 27 15 27 27 21.624 27 15 21.624 3 15 3Zm4.8 13.2h-3.6v3.6c0 0.66 -0.54 1.2 -1.2 1.2 -0.66 0 -1.2 -0.54 -1.2 -1.2v-3.6H10.2c-0.66 0 -1.2 -0.54 -1.2 -1.2 0 -0.66 0.54 -1.2 1.2 -1.2h3.6V10.2c0 -0.66 0.54 -1.2 1.2 -1.2 0.66 0 1.2 0.54 1.2 1.2v3.6h3.6c0.66 0 1.2 0.54 1.2 1.2 0 0.66 -0.54 1.2 -1.2 1.2Z"
            fill="#616161"
        />
    </Svg>
);

export default PlusCircleIcon;