import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import AuthPage from "../pages/AuthPage";
import RegPage from "../pages/RegPage";
import CarsPage from "../pages/CarsPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts/>,
        errorElement:<h2>PovnaShlypa</h2>,
        children:[
            {index:true,element:<AuthPage/>},
            {path:'/register',element:<RegPage/>},
            {path:'/cars', element:<CarsPage/>}
        ]
    }
])