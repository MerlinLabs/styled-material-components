import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const AddCirclePath = () => [
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" key='path0' />,
];

const AddCircleIcon = styled(Icon).attrs({
  children: AddCirclePath,
})``;

export default AddCirclePath;
export { AddCircleIcon };
