import React from 'react';

export type TopCarsType = {
    manufacturer:string
    model: string
}

export type Task2Type = {
    // topCars: Array<TopCarsType>
    topCars: TopCarsType[]
}

const Task2 = (props: Task2Type) => {
    return (
        <div>
            {props.topCars.map(i => {
                return <div key={i.manufacturer}>{i.manufacturer} {i.model}</div>
            })}
        </div>
    );
};

export default Task2;
