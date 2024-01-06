import Home from "../Components/Home";
import Dashboard from "../Components/Dashboard";
import CreatePost from "../Components/CreatePost";
import EditCard from "../Components/EditCard";
import { Navigate } from "react-router-dom";

const AppRoutes=[
    {
        path:'/',
        exact:true,
        element:<Home/>
    },
    {
        path:'/dashboard',
        exact:true,
        element:<Dashboard/>
    },
    {
        path:'/create',
        exact:true,
        element:<CreatePost/>
    },
    {
        path:'/edit',
        exact:true,
        element:<EditCard/>
    },
    {
        path:'*',
        exact:false,
        element:<Navigate to='/'/>
    },
]

export default AppRoutes;