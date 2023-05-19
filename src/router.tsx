import { createBrowserRouter } from "react-router-dom";

import MainLayout from "~~/layouts/main.tsx";

import List from "~~/pages/list.tsx";
import Add from "~~/pages/add.tsx";
import Edit from "~~/pages/edit.tsx";
import ChangeKey from "~~/pages/changeKey.tsx";
import Login, { action as loginAction } from "~~/pages/login.tsx";
import Register from "~~/pages/register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <List />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
      },
      {
        path: "/change-key",
        element: <ChangeKey />,
      },
    ],
  },
  {
    path: "/login",
    action: loginAction,
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
