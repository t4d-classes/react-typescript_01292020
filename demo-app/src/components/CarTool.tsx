import React, { FC, useState } from 'react';

import { Car } from '../models/car';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

interface CarToolProps {
  cars: Car[];
}

export const CarTool: FC<CarToolProps> = (props) => {

  const [ editCarId, setEditCarId ] = useState(-1);
  const [ cars, setCars ] = useState(props.cars.concat());

  const appendCar = (car: Car) => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id) as [], 0) + 1,
    }));
    setEditCarId(-1);
  };

  const deleteCar = (carId: number) => {
    setCars(cars.filter(c => c.id !== carId));
    setEditCarId(-1);
  };

  const replaceCar = (car: Car) => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = cars.concat();
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };  

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCar}
        onCancelCar={() => setEditCarId(-1)} onSaveCar={replaceCar} />
      <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
    </>
  );

};
