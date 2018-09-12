import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const PresentToAllPath = () => [
  <path d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z" key='path0' />,
];

const PresentToAllIcon = styled(Icon).attrs({
  children: PresentToAllPath,
})``;

export default PresentToAllPath;
export { PresentToAllIcon };
