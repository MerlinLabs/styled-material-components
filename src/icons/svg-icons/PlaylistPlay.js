import React from "react";

import { Icon } from "../icons";

const PlaylistPlayPath = () => [
  <path
    d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"
    key="path0"
  />
];

const PlaylistPlayIcon = Icon.extend.attrs({
  children: PlaylistPlayPath
})``;

export default PlaylistPlayPath;
export { PlaylistPlayIcon };
