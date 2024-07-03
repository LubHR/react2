import React, {useReducer, useState} from 'react';
import './App.css';

const reduser = (state:number,action:{type:string,payload:number}) =>{
    switch (action.type) {
        case 'add':
            return state + action.payload
        case 'remove':
            return state - action.payload

    }
    return state;
}

const App = () => {

    const [counter, dispath] = useReducer(reduser,0);

    return (
        <div>
            <h2>{counter}</h2>

            <button onClick={() => {
                dispath({type: 'add', payload: 10})
            }}>
                inc
            </button>

            <button onClick={() => {
                dispath({type:'remove', payload:20})
            }}>
                dec
            </button>

        </div>
    )
}
export default App;
