import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const ViewCompactPath = () => [
  <path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z" key='path0' />,
];

const ViewCompactIcon = styled(Icon).attrs({
  children: ViewCompactPath,
})``;

export default ViewCompactPath;
export { ViewCompactIcon };
