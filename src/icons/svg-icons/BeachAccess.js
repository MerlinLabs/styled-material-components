import React from "react";

import { Icon } from "../icons";

const BeachAccessPath = () => [
  <path
    d="M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"
    key="path0"
  />
];

const BeachAccessIcon = Icon.extend.attrs({
  children: BeachAccessPath
})``;

export default BeachAccessPath;
export { BeachAccessIcon };
