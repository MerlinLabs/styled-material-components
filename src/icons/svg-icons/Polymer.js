import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const PolymerPath = () => [
  <path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z" key='path0' />,
];

const PolymerIcon = styled(Icon).attrs({
  children: PolymerPath,
})``;

export default PolymerPath;
export { PolymerIcon };
