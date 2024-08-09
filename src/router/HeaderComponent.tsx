import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/users'}>Users</NavLink></li>
                <li><NavLink to={'/posts'}>Posts</NavLink></li>
                <hr/>
            </ul>
        </div>
    );
};

export default HeaderComponent;