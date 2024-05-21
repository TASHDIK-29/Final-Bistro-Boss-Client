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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path : 'cart',
        element: <Cart></Cart>
      }
    ]
  }
  // {
  //   path: '/login',
  //   element: <Login />
  // },
]);