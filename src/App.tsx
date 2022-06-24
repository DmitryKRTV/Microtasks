import React from 'react';
import './App.css';
import Task1 from "./task-1/Task1";
import Task2 from "./task-2/Task2";
import Task3 from "./task-3/Task3";
import Task4 from "./task-4/Task4";
import Task5 from "./task-5/Task5";

const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]



function App() {
    return (
        <div className="App">
            {/*<Task1/>*/}
            {/*<Task2 topCars={topCars}/>*/}
            {/*<Task3/>*/}
            {/*<Task4/>*/}
            <Task5/>
        </div>
    );
}

export default App;
