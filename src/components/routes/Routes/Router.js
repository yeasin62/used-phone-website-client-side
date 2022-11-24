import Dashboard from "../../pages/Dashboard/Dashboard";
import Login from "../../pages/Login/Login";
import Products from "../../pages/Products/Products";
import Signup from "../../pages/Signup/Signup";

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
                element: <Products></Products>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    }
]);

export default router;