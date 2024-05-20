import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute><Menu /></PrivateRoute>
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
  // {
  //   path: '/login',
  //   element: <Login />
  // },
]);