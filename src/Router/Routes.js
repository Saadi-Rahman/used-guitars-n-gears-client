import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/Category/ProductDetails/ProductDetails";
import NotFoundRoute from "../Pages/Shared/NotFoundRoute/NotFoundRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import MyBuyers from "../Pages/Dashboard/MyBuyers/MyBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";

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
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/productDetails',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
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
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/reportedItems',
                element: <ReportedItems></ReportedItems>
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundRoute></NotFoundRoute>
    }
])

export default router;