import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import NotFoundRoute from "../Pages/Shared/NotFoundRoute/NotFoundRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import MyBuyers from "../Pages/Dashboard/MyBuyers/MyBuyers";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import ProductDetails from "../Pages/ProductDetails/ProductDetails/ProductDetails";
import Category from "../Pages/Category/Category/Category";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/allProducts',
                element: <Category></Category>,
                loader: () => fetch(`https://used-guitars-n-gears-server.vercel.app/products`)
            },
            {
                path: '/categories/:category_name',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://used-guitars-n-gears-server.vercel.app/categories/${params.category_name}`)
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`https://used-guitars-n-gears-server.vercel.app/products/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myBuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundRoute></NotFoundRoute>
    }
])

export default router;