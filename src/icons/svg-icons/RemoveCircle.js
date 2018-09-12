import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const RemoveCirclePath = () => [
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" key='path0' />,
];

const RemoveCircleIcon = styled(Icon).attrs({
  children: RemoveCirclePath,
})``;

export default RemoveCirclePath;
export { RemoveCircleIcon };
