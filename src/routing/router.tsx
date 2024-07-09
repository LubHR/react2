import {createBrowserRouter} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import UsersPage from "../pages/usersPage";
import PostsPage from "../pages/postsPage";
import CommentsPage from "../pages/commentsPage";
import ErrorPage from "../pages/errorPage";
import HelpPage from "../pages/helpPage";

const router = createBrowserRouter([
    {path:"/",
        element:<Mainlayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {index:true,element:<UsersPage/>},
            {path:'users',element:<UsersPage/>},
            {path:'posts',element:<PostsPage/>},
            {path:'comments',element:<CommentsPage/>},
            {path:'help', element:<HelpPage/>}
        ]
    }
]);

export default router;