import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import Frist from "./component/Frist/Frist";
import Friends from "./component/Friends/Friends";
import FriendDetails from "./component/FriendDetails/FriendDetails";
import Posts from "./component/Posts/Posts";
import PostDetail from "./component/PostDetail/PostDetail";
import Albums from "./component/Albums/Albums";
import AlbumeDetails from "./component/Albume/AlbumeDetailes/AlbumeDetails";
import Todos from "./component/Todos/Todos";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Frist></Frist>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "friend/:friendId",
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "posts",
        element: <Posts></Posts>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "post/:postId",
        element: <PostDetail></PostDetail>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "albums",
        element: <Albums></Albums>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/albums"),
      },
      {
        path: "albume/:albumeID",
        element: <AlbumeDetails></AlbumeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/albums/${params.albumeID}`
          ),
      },
      {
        path: "/todos",
        element: <Todos></Todos>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/todos')
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
