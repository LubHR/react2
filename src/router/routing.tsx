import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import FooterPage from "../pages/FooterPage";

const routes: RouteObject[] = [
    {path: '', element:<MainLayout/>, children:[
            {index:true, element:<HomePage/>},
            {path:'/home',element:<HomePage/>},
            {path:'/footer',element:<FooterPage/>}
        ]},

]

export const router = createBrowserRouter(routes);