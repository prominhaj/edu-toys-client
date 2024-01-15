import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: 'my-toys',
        element: <MyToys></MyToys>
      },
      {
        path: 'add-toy',
        element: <AddToys></AddToys>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ],
  },
]);

export default router;
