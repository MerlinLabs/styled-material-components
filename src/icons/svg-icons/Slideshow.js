import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const SlideshowPath = () => [
  <path d="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" key='path0' />,
];

const SlideshowIcon = styled(Icon).attrs({
  children: SlideshowPath,
})``;

export default SlideshowPath;
export { SlideshowIcon };
