import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts/>,
        children:[
            {index:true,element:<HomePage/>},
            {path:'users',element:<UsersPage/>},
            {path:'posts',element:<PostsPage/>}
        ]
    }
])

