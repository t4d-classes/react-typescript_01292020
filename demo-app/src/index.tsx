import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from './models/color';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList: Color[] = [
  { id: 1, name: 'blue', hexcode: '0000FF' },
  { id: 2, name: 'yellow', hexcode: '00FFFF' },
  { id: 3, name: 'red', hexcode: 'FF0000' },
];

ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <CarTool />
  </>,
  document.querySelector('#root'),
);

