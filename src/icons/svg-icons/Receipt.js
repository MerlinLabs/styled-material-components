import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const ReceiptPath = () => [
  <path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z" key='path0' />,
];

const ReceiptIcon = styled(Icon).attrs({
  children: ReceiptPath,
})``;

export default ReceiptPath;
export { ReceiptIcon };
