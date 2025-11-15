import { createBrowserRouter } from "react-router";
import App from "../App";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Biography from "../pages/Biography";
import Novel from "../pages/Books/Novel";
import Docufiction from "../pages/Books/Docufiction";
import Documentary from "../pages/Books/Documentary";
import Photography from "../pages/Photography";
import NBS from "../pages/NBS";

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
      {
        path: "/books/docu-fiction",
        element: <Docufiction />,
      },
      {
        path: "/books/documentary",
        element: <Documentary />,
      },
      {
        path: "/photography",
        element: <Photography />,
      },
      {
        path: "/nomadblacksheep",
        element: <NBS />,
      },
    ],
  },
]);
