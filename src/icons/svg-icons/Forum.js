import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const ForumPath = () => [
  <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" key='path0' />,
];

const ForumIcon = styled(Icon).attrs({
  children: ForumPath,
})``;

export default ForumPath;
export { ForumIcon };
