import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const CategoryIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_26_51)">
      <Path
        d="M12 2L6.5 11H17.5L12 2ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 21.5H11V13.5H3V21.5ZM5 15.5H9V19.5H5V15.5Z"
        fill="#616161"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_26_51">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CategoryIcon;