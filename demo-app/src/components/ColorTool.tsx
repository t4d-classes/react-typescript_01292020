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

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    })
  };

  console.log('component rendering');
  console.log(colorForm);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {props.colors.map(c => <li key={c.id}>{c.name}</li>)}
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
      </form>
    </>
  );

};
