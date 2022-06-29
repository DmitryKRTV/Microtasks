import React, {useState} from "react";
import {ChangeEvent} from "react";

type FullInputType = {
    addMessage: (newMessage: string) => void
}

const FullInput = (props: FullInputType) => {

    const [input, setInput] = useState("");

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setInput(event.currentTarget.value);
    }

    const onClickHandler = () => {
        props.addMessage(input)
        setInput("")
    }

    return (
        <div>
            <input type="text" value={input} onChange={onChangeInputHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

export default FullInput;
