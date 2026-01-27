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
import La from "../pages/Books/Novel/La";
import ErrorPage from "../pages/ErrorPage";
import Al from "../pages/Books/Novel/Al";
import FN from "../pages/Books/Novel/FN";
import Casting from "../pages/Books/Docufiction/Casting";
import DS from "../pages/Books/Documentary/DS";
import PS from "../pages/Books/Documentary/PS";
import LT from "../pages/Books/Documentary/LT";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        path: "/books/novel/la-langoureuse",
        element: <La />,
      },
      {
        path: "/books/novel/alissia-lone",
        element: <Al />,
      },
      {
        path: "/books/novel/funerarium",
        element: <FN />,
      },
      {
        path: "/books/docu-fiction/casting",
        element: <Casting />,
      },
      {
        path: "/books/documentary",
        element: <Documentary />,
      },
      {
        path: "/books/documentary/diva-siouxsie",
        element: <DS />,
      },
      {
        path: "/books/documentary/patti-smith",
        element: <PS />,
      },
      {
        path: "/books/documentary/la-tribu",
        element: <LT />,
      },
      {
        path: "/books/documentary/diva-siouxsie",
        element: <DS />,
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
