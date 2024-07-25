import React from 'react';
import {NavLink} from "react-router-dom";
import './HeaderCss.css'

const HeaderComponent = () => {
    return (
        <div className="Header">
            <NavLink to={'/'} className={'Link'}>AuthPage</NavLink>
            <NavLink to={'register'} className={'Link'}>Registration</NavLink>
        </div>
    );
};

export default HeaderComponent;