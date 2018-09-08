import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const ChatBubbleOutlinePath = () => [
  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" key='path0' />,
];

const ChatBubbleOutlineIcon = styled(Icon).attrs({
  children: ChatBubbleOutlinePath,
})``;

export default ChatBubbleOutlinePath;
export { ChatBubbleOutlineIcon };
