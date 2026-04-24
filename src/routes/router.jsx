// router.jsx
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Artical from "../pages/Article";
import Forum from "../pages/Forum";
import HomePage from "../pages/Home";
import Nasr from "../pages/Nasr";
import Nazm from "../pages/Nazm";
import AdibPage from "../pages/AdibPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import AddBook from "../pages/AddBook";
import AddAuthor from "../pages/AddAuthor";

const routers = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/nasr",
        element: <Nasr />,
      },
      {
        path: "/nazm",
        element: <Nazm />,
      },
      {
        path: "/maqolalar",
        element: <Artical />,
      },
      {
        path: "/forum",
        element: <Forum />,
      },
    ],
  },
  { path: "/adiblar/:id", element: <AdibPage /> },

  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/add-book",
    element: <AddBook />,
  },
  {
    path: "/add-author",
    element: <AddAuthor />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <h2>Not found</h2>,
  },
]);
export default routers;
