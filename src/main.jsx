import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {createRoutesFromElements} from "react-router";
import Layout from "./Layout";
import "../src/index.css";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
