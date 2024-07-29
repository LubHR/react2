import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthPage from "../pages/AuthPage";
import RegPage from "../pages/RegPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <div>Problem</div>,
        children: [
            {index:true,element:<AuthPage/>},
            {path:'/registration',element:<RegPage/>}
        ]
    }
])

export {router}