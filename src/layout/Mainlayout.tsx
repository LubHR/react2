import React from 'react';
import HeaderComponent from "../component/HeaderComponent";
import {Outlet} from "react-router-dom";
import FooterComponent from "../component/FooterComponent";

const Mainlayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <hr/>
            <Outlet/>
            <hr/>
            <FooterComponent/>
        </div>
    );
};

export default Mainlayout;