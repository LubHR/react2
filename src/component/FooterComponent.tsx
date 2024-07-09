import React from 'react';
import {NavLink} from "react-router-dom";

const FooterComponent = () => {
    return (
        <div>
            <NavLink to={"/help"}>Help</NavLink>
        </div>
    );
};

export default FooterComponent;