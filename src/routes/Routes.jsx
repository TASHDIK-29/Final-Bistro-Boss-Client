import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/Cart";
import AllUsers from "../pages/dashboard/AllUsers";
import AddItems from "../pages/dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/dashboard/ManageItems";
import UpdateItem from "../pages/dashboard/UpdateItem";
import Payment from "../pages/dashboard/Payment/Payment";
import PaymentHistory from "../pages/dashboard/PaymentHistory";
import UserHome from "../pages/dashboard/UserHome";
import AdminHome from "../pages/dashboard/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/order/:category',
        element: <Order />
      },
      {
          path: '/login',
          element: <Login />
      },
      {
          path: '/register',
          element: <Register />
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    // element: <Dashboard></Dashboard>,
    children: [
      // normal users routes
      {
        path : 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path : 'cart',
        element: <Cart></Cart>
      },
      {
        path : 'payment',
        element: <Payment></Payment>
      },
      {
        path : 'userPayment',
        element: <PaymentHistory></PaymentHistory>
      },

      // Admin Routes
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`https://final-bistro-boss-server-gamma.vercel.app/menu/${params.id}`)
      },
    ]
  }
  // {
  //   path: '/login',
  //   element: <Login />
  // },
]);