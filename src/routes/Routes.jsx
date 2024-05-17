import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/Order";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
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
      ]
    },
  ]);