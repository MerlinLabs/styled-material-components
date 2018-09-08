import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const StoreMallDirectoryPath = () => [
  <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" key='path0' />,
];

const StoreMallDirectoryIcon = styled(Icon).attrs({
  children: StoreMallDirectoryPath,
})``;

export default StoreMallDirectoryPath;
export { StoreMallDirectoryIcon };
