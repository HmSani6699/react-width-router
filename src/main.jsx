import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import Error from "./component/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
    errorElement:<Error></Error>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
