import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './headerstyle.module.css'

const FooterComponent = () => {
    return (
        <div>
            <NavLink to={"/help"} className={styles.link}>Help</NavLink>
        </div>
    );
};

export default FooterComponent;