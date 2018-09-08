import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const LineWeightPath = () => [
  <path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z" key='path0' />,
];

const LineWeightIcon = styled(Icon).attrs({
  children: LineWeightPath,
})``;

export default LineWeightPath;
export { LineWeightIcon };
