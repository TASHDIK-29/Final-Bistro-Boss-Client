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
        path : 'cart',
        element: <Cart></Cart>
      },

      // Admin Routes
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        // element: <AllUsers></AllUsers>
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
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
    ]
  }
  // {
  //   path: '/login',
  //   element: <Login />
  // },
]);