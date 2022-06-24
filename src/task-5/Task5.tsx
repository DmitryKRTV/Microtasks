import React, {useState} from 'react';

const Task5 = () => {

    type FilterType = "all" | "RUBLS" | "Dollars"

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    let [filter, setFilter] = useState("all")

    let currentMoney = money;

    const onFilterHandler = (filter: FilterType) => {
        setFilter(filter)
    }

    if(filter === "RUBLS") {
        currentMoney = money.filter(i => i.banknots === "RUBLS")
    }

    if(filter === "Dollars") {
        currentMoney = money.filter(i => i.banknots === "Dollars")
    }

    return (
        <>
            <div>
                {currentMoney.map((i, index) => {
                    return (
                        <div key={index}>{i.banknots} {i.value} {i.number}</div>
                    )
                })}

            </div>
            <div>
                <button onClick={()=>{onFilterHandler("all")}}>all</button>
                <button onClick={()=>{onFilterHandler("RUBLS")}}>RUBLS</button>
                <button onClick={()=>{onFilterHandler("Dollars")}}>Dollars</button>
            </div>
        </>
    );
};

export default Task5;
