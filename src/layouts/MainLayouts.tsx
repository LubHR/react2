import React from 'react';
import {Outlet} from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";

const MainLayouts = () => {
    return (
        <div>
            <HeaderComponent/>
            <hr/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayouts;