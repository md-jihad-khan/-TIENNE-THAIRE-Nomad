import { createBrowserRouter } from "react-router";
import App from "../App";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Biography from "../pages/Biography";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/biography",
        element: <Biography />,
      },
    ],
  },
]);
