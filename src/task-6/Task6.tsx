import React, {useState} from 'react';
import FullInput from "./FullInput/FullInput";

const Task5 = () => {

    type MessagesType = {
        message: string
    }

    let [message, setMessage] = useState<Array<MessagesType>>([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])


    const addMessage = (newMessage: string) => {
        setMessage([{message: newMessage}, ...message])
    }

    return (
        <>
            <FullInput addMessage={addMessage}/>
            <div>
                {message.map((i, index) => {
                    return (
                        <div key={index}>{i.message}</div>
                    )
                })}
            </div>
        </>
    );
};

export default Task5;
