import React from 'react';

import { Color } from '../models/color';

interface ColorToolProps {
  colors: Color[];
}

export const ColorTool: React.FC<ColorToolProps> = (props) => {

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {props.colors.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>
    </>
  );

};