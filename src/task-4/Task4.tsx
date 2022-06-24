import React, {useState} from 'react';

const Task4 = () => {

    let a = 1;

    const buttonHandler = () => {
        setNumber(++number);

    }

    const buttonHandler1 = () => {
        setNumber(0);

    }

    let [number, setNumber] = useState(a);

    return (
        <div>
            <div>{number}</div>
            <button onClick={buttonHandler}>+</button>
            <button onClick={buttonHandler1}>0</button>
        </div>
    );
};

export default Task4;
