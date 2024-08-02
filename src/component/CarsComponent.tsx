import React, {FC} from 'react';
import {CarWithAuthModel} from "../model/CarWithAuthModel";

interface IProps {
    cars: CarWithAuthModel[]
}

const CarsComponent:FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map((car) => (<div key={car.id}>{car.id}-{car.brand}</div>))
            }
        </div>
    );
};

export default CarsComponent;