import { createBrowserRouter } from "react-router";
import App from "../App";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Biography from "../pages/Biography";
import Novel from "../pages/Books/Novel";

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
      {
        path: "/books/novel",
        element: <Novel />,
      },
    ],
  },
]);
