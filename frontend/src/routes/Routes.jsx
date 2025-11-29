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
import Introduction from "../pages/Photography/Introduction";
import Travel from "../pages/Photography/Travel";
import Eroticism from "../pages/Photography/Eroticism";

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
        path: "/photography/introduction",
        element: <Introduction />,
      },
      {
        path: "/photography/travel",
        element: <Travel />,
      },
      {
        path: "/photography/eroticism",
        element: <Eroticism />,
      },
      {
        path: "/nomadblacksheep",
        element: <NBS />,
      },
    ],
  },
]);
