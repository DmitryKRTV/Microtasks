import React from 'react';

type ButtonType = {
    name: string
    callBack: ()=>void
}


const Button = (props: ButtonType) => {

    const onClick2Handler = () => {
        props.callBack()
    }


    return (
        <div>
            <button onClick={onClick2Handler}>{props.name}</button>
        </div>
    );
};

export default Button;
