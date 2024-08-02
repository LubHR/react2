import React from 'react';
import {NavLink} from "react-router-dom";
import "./HeaderCss.css"

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to={'/'} className={'Link'}>Auth</NavLink>
            <NavLink to={'/registration'} className={'Link'}>Regist</NavLink>
            <NavLink to={'/cars'} className={'Link'}>Cars</NavLink>
            <hr/>
        </div>
    );
};

export default HeaderComponent;