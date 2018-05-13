import React from "react";

import { Icon } from "../icons";

const FormatAlignCenterPath = () => [
  <path
    d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"
    key="path0"
  />
];

const FormatAlignCenterIcon = Icon.extend.attrs({
  children: FormatAlignCenterPath
})``;

export default FormatAlignCenterPath;
export { FormatAlignCenterIcon };
