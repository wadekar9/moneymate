import * as React from "react";
import Svg, { Path } from "react-native-svg";

const EmailIcon = (props) => (
  <Svg
  width="25px"
  height="25px"
  viewBox="0 0 0.5 0.5"
  xmlns="http://www.w3.org/2000/svg"
  fill="#616161"
  {...props}
>
  <Path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M0.031 0.109 0.047 0.094h0.406L0.469 0.109v0.281L0.453 0.406h-0.406L0.031 0.391v-0.281zm0.031 0.032V0.375h0.375V0.142L0.259 0.278H0.241L0.063 0.142zM0.407 0.125H0.093L0.25 0.246 0.407 0.125z"
  />
</Svg>
);

export default EmailIcon;