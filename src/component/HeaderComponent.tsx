import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to={'users'}>users</NavLink>
            <NavLink to={'posts'}>posts</NavLink>
            <NavLink to={'comments'}>comments</NavLink>
        </div>
    );
};

export default HeaderComponent;