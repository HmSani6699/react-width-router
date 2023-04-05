import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     errorElement:<Error></Error>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//     errorElement:<Error></Error>,
//   },
//   {
//     path: "/aboute",
//     element: <About></About>,
//   },
// ]);

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
