import React from 'react';
import {NavLink} from "react-router-dom";
import './HeaderCss.css'

const HeaderComponent = () => {
    return (
        <div className="Header">
            <NavLink to={'register'} className={'Link'}>Registration</NavLink>
            <NavLink to={'/'} className={'Link'}>AuthPage</NavLink>
            <NavLink to={'cars'} className={'Link'}>Cars</NavLink>
        </div>
    );
};

export default HeaderComponent;