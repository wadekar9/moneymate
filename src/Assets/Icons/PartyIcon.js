import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const PartyIcon = (props) => (
    <Svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={20} cy={20} r={20} fill="#BBDEFB" />
        <G clipPath="url(#clip0_156_230)">
            <Path
                d="M10 30L24 25L15 16L10 30ZM20.35 24.18L13.3 26.7L15.82 19.65L20.35 24.18Z"
                fill="#424242"
            />
            <Path
                d="M22.53 20.53L28.12 14.94C28.61 14.45 29.4 14.45 29.89 14.94L30.48 15.53L31.54 14.47L30.95 13.88C29.88 12.81 28.13 12.81 27.06 13.88L21.47 19.47L22.53 20.53Z"
                fill="#424242"
            />
            <Path
                d="M18.06 14.88L17.47 15.47L18.53 16.53L19.12 15.94C20.19 14.87 20.19 13.12 19.12 12.05L18.53 11.46L17.47 12.53L18.06 13.12C18.54 13.6 18.54 14.4 18.06 14.88Z"
                fill="#424242"
            />
            <Path
                d="M25.06 19.88L23.47 21.47L24.53 22.53L26.12 20.94C26.61 20.45 27.4 20.45 27.89 20.94L29.5 22.55L30.56 21.49L28.95 19.88C27.87 18.81 26.13 18.81 25.06 19.88Z"
                fill="#424242"
            />
            <Path
                d="M23.06 13.88L19.47 17.47L20.53 18.53L24.12 14.94C25.19 13.87 25.19 12.12 24.12 11.05L22.53 9.46L21.47 10.52L23.06 12.11C23.54 12.6 23.54 13.4 23.06 13.88Z"
                fill="#424242"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_156_230">
                <Rect width={24} height={24} fill="white" transform="translate(8 8)" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default PartyIcon;