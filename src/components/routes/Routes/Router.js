import Blog from "../../pages/Blog/Blog";
import Dashboard from "../../pages/Dashboard/Dashboard";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Login from "../../pages/Login/Login";
import Products from "../../pages/Products/Products";
import SingleProduct from "../../pages/Products/SingleProduct/SingleProduct";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
]);

export default router;