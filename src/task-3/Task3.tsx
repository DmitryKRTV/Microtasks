import React from 'react';
import Button from "./Button";

const Task3 = () => {

    // const Click2 = () => {
    //
    // }
    // const Click3 = (e: any) => {
    //
    // }

    const Button2 = (name: string) => {
        console.log(name)
    }

    const Button3 = () => {
        console.log("Im stupid button")
    }


    return (
        <div>
            <Button name={"Subscribe2"} callBack={() => {
                Button2('Hola')
            }}/>
            <Button name={"Subscribe3"} callBack={Button3}/>

        </div>
    );
};

export default Task3;
