import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './headerstyle.module.css'

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to={'users'} className={styles.link}>users</NavLink>
            <NavLink to={'posts'} className={styles.link}>posts</NavLink>
            <NavLink to={'comments'} className={styles.link}>comments</NavLink>
        </div>
    );
};

export default HeaderComponent;