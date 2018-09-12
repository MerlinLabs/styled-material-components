import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const DeletePath = () => [
  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" key='path0' />,
];

const DeleteIcon = styled(Icon).attrs({
  children: DeletePath,
})``;

export default DeletePath;
export { DeleteIcon };
