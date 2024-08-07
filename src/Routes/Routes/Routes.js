import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import BookingModal from "../../Pages/Categories/BookingModal/BookingModal";
import Categories from "../../Pages/Categories/Categories";
import AddProduct from "../../Pages/Categories/CategoryProducts/AddProduct";
import CategoryProducts from "../../Pages/Categories/CategoryProducts/CategoryProducts";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Buyers from "../../Pages/Dashboard/Buyers/Buyers";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import AddNewProduct from "../../Pages/Dashboard/Sellers/AddNewProduct";
import Sellers from "../../Pages/Dashboard/Sellers/Sellers";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/category-product/:brand',
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
                loader: ({ params }) => fetch(`https://decency-fur-resale-server.vercel.app/products/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/seller/myproduct',
                element: <Sellers></Sellers>
            },
            {
                path: '/dashboard/seller/addproduct',
                element: <AddNewProduct></AddNewProduct>
            },
            {
                path: '/dashboard/buyer/myorders',
                element: <Buyers></Buyers>
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://decency-fur-resale-server.vercel.app/bookingOrders/${params.id}`)
            }
        ]
    },

])

export default router;