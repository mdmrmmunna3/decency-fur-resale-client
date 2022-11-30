import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import BookingModal from "../../Pages/Categories/BookingModal/BookingModal";
import Categories from "../../Pages/Categories/Categories";
import AddProduct from "../../Pages/Categories/CategoryProducts/AddProduct";
import CategoryProducts from "../../Pages/Categories/CategoryProducts/CategoryProducts";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
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
            },
            {
                path: '/categories/:brand',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/bookingProduct/:brand/:id',
                element: <BookingModal></BookingModal>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`) 
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path:'/dashboard/allsellers',
                element: <AllSeller></AllSeller>
            },
            {
                path:'/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
        ]
    }
    
])

export default router;