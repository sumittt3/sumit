import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {createRoutesFromElements} from "react-router";
import Layout from "./Layout";
import "../src/index.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Skill from "./Components/Skill/Skill";
import Resume from "./Components/Resume/Resume";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/skills",
        element: <Skill />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
