import React from "react";

import { Icon } from "../icons";

const EventSeatPath = () => [
  <path
    d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"
    key="path0"
  />
];

const EventSeatIcon = Icon.extend.attrs({
  children: EventSeatPath
})``;

export default EventSeatPath;
export { EventSeatIcon };
