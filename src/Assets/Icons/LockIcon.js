import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LockIcon = (props) => (
  <Svg
    fill="#616161"
    width="25px"
    height="25px"
    viewBox="0 0 0.75 0.75"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0.531 0.281v-0.063a0.156 0.156 0 0 0 -0.313 0v0.063A0.094 0.094 0 0 0 0.125 0.375v0.219A0.094 0.094 0 0 0 0.219 0.688h0.313A0.094 0.094 0 0 0 0.625 0.594V0.375A0.094 0.094 0 0 0 0.531 0.281Zm-0.25 -0.063a0.094 0.094 0 0 1 0.188 0v0.063h-0.188Zm0.281 0.375A0.031 0.031 0 0 1 0.531 0.625h-0.313A0.031 0.031 0 0 1 0.188 0.594V0.375A0.031 0.031 0 0 1 0.219 0.344h0.313A0.031 0.031 0 0 1 0.563 0.375Z" />
  </Svg>
);

export default LockIcon;