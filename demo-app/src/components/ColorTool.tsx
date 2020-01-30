import React, { FC, useState } from 'react';

import { Color } from '../models/color';

interface ColorToolProps {
  colors: Color[];
}

interface ColorFormState {
  name: string;
  hexcode: string;
  [ x: string ]: string;
}

const initialColorForm: () => ColorFormState = () => ({
  name: '',
  hexcode: '',
});

export const ColorTool: FC<ColorToolProps> = (props) => {

  const [ colorForm, setColorForm ] = useState(initialColorForm());
  const [ colors, setColors ] = useState(props.colors.concat());

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    })
  };

  const appendColor = () => {

    setColors(colors.concat({
      ...colorForm,
      id: Math.max(...colors.map(c => c.id) as [], 0) + 1,
    }));

    setColorForm(initialColorForm());
  };


  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="name-input">Name</label>
          <input type="text" id="name-input" value={colorForm.name} name="name" onChange={change} />
        </div>
        <div>
          <label htmlFor="hexcode-input">Hexcode</label>
          <input type="text" id="hexcode-input" value={colorForm.hexcode} name="hexcode" onChange={change} />
        </div>

        <button type="button" onClick={appendColor}>Add Color</button>
      </form>
    </>
  );

};
