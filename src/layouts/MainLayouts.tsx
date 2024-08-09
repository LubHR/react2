import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../router/HeaderComponent";

const MainLayouts = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;