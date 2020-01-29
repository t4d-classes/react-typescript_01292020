import React from 'react';

import { Color } from '../models/color';

export const ColorTool = () => {

  const colors: Color[] = [
    { id: 1, name: 'blue', hexcode: '0000FF' },
    { id: 2, name: 'yellow', hexcode: '00FFFF' },
    { id: 3, name: 'red', hexcode: 'FF0000' },
  ];

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>
    </>
  );

};