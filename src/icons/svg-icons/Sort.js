import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const SortPath = () => [
  <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" key='path0' />,
];

const SortIcon = styled(Icon).attrs({
  children: SortPath,
})``;

export default SortPath;
export { SortIcon };
