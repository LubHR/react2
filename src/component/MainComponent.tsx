import React from 'react';
import {useMyContext} from "../App";

const MainComponent = () => {
    const {counter} = useMyContext()

    return (
        <div>
            <h2>{counter}</h2>
        </div>
    );
};

export default MainComponent;