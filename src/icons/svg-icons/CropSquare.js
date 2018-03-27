import React from 'react';
import { Icon } from '../icons';

const CropSquarePath = () => [
  <path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z" key='path0' />,
];

const CropSquareIcon = Icon.extend.attrs({
  children: CropSquarePath,
})``;

export default CropSquarePath;
export { CropSquareIcon };
