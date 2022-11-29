import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import Advertise from "../../pages/Dashboard/Admin/Advertise/Advertise";
import AllBuyers from "../../pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../pages/Dashboard/Admin/AllSellers/AllSellers";
import MyOrders from "../../pages/Dashboard/Buyer/MyOrders/MyOrders";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MyBuyers from "../../pages/Dashboard/Seller/MyBuyers/MyBuyers";
import MyProducts from "../../pages/Dashboard/Seller/MyProducts/MyProducts";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Categories from "../../pages/Home/Categories/Categories";
import Login from "../../pages/Login/Login";
import Products from "../../pages/Products/Products";
import SingleProduct from "../../pages/Products/SingleProduct/SingleProduct";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../../layout/Main/Main");
const { default: Home } = require("../../pages/Home/Home");

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
                path: '/products',
                element: <Products></Products>,
                loader: async ()=> fetch('http://localhost:5000/phones')
            },
            {
                path: '/phone/:id',
                element: <SingleProduct></SingleProduct>,
                loader: async ({params})=> fetch(`http://localhost:5000/phone/${params.id}`)
            },
            
            {
                path: '/category/',
                element: <Categories></Categories>,
                loader: ()=> fetch('http://localhost:5000/categories/')
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
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
                element: <Signup></Signup>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <AllSellers></AllSellers>
            },
            {
                path: 'add',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'my-products',
                element: <MyProducts></MyProducts>
            },
            {
                path: 'my-buyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/sellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/advertise',
                element: <AdminRoute><Advertise></Advertise></AdminRoute>
            },
            {
                path:'/dashboard/my-orders',
                element: <MyOrders></MyOrders>
            }
        ]
    },
]);

export default router;