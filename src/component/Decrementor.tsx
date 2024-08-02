import React from 'react';
import {useMyContext} from "../App";

const Decrementor = () => {

    const{dec}= useMyContext()
    return (
        <div>
            <button onClick={dec}>dec</button>
        </div>
    );
};

export default Decrementor;