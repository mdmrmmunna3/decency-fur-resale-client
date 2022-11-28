import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories";
import CategoryProducts from "../../Pages/Categories/CategoryProducts/CategoryProducts";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path:'/category-product/:brand',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path:'/dashboard/allseller',
                element: <AllSeller></AllSeller>
            }
        ]
    }
    
])

export default router;