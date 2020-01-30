import React, { FC, useState } from 'react';

import { Car } from '../models/car';

interface CarToolProps {
  cars: Car[];
}

interface CarFormState {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  [ x: string ]: string | number;
}

const initialCarForm: () => CarFormState = () => ({
  make: '',
  model: '',
  year: 1900,
  color: '',
  price: 0,
});

export const CarTool: FC<CarToolProps> = (props) => {

  const [ carForm, setCarForm ] = useState(initialCarForm());
  const [ cars, setCars ] = useState(props.cars.concat());

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.value,
    })
  };

  const appendCar = () => {

    setCars(cars.concat({
      ...carForm,
      id: Math.max(...cars.map(c => c.id) as [], 0) + 1,
    }));

    setCarForm(initialCarForm());
  };


  return (
    <>
      <header>
        <h1>Car Tool</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.color}</td>
            <td>{car.price}</td>
          </tr>)}
        </tbody>
      </table>
      <form>
        <div>
          <label htmlFor="make-input">Make</label>
          <input type="text" id="make-input" value={carForm.make} name="make" onChange={change} />
        </div>
        <div>
          <label htmlFor="model-input">Model</label>
          <input type="text" id="model-input" value={carForm.model} name="model" onChange={change} />
        </div>
        <div>
          <label htmlFor="year-input">Year</label>
          <input type="number" id="year-input" value={carForm.year} name="year" onChange={change} />
        </div>
        <div>
          <label htmlFor="color-input">Color</label>
          <input type="text" id="color-input" value={carForm.color} name="color" onChange={change} />
        </div>
        <div>
          <label htmlFor="price-input">Price</label>
          <input type="number" id="price-input" value={carForm.price} name="price" onChange={change} />
        </div>
        <button type="button" onClick={appendCar}>Add Car</button>
      </form>
    </>
  );

};
