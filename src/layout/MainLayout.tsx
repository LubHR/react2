import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../component/header/HeaderComponent";
import FooterComponent from "../component/FooterComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;