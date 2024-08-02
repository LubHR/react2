import React from 'react';
import {useMyContext} from "../App";

const Incrementor = () => {
    let {inc} = useMyContext()
    return (
        <div>
            <button onClick={inc}>inc</button>
        </div>
    );
};

export default Incrementor;