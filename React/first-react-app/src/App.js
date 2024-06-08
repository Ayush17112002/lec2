import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "./Lec15/Profile";
import Home from "./Lec15/Home";
import NavBar from "./Lec15/NavBar";
import Lec15 from "./Lec15/Lec15";
import Feed from "./Lec15/Feed";
import Error from "./Lec15/Error";
import ProductList from "./Lec15/ProductList";
import Product from "./Lec15/Product";
import Lec16 from "./Lec16/A";
import A from "./Lec16/A";
// import Lec10 from "./Lec10/Lec10";
// import Lec11 from "./Lec11/Lec11";
// import Lec12 from "./Lec12/Lec12";
// import Lec13 from "./Lec13/Lec13";
// import ThemeContext from "./Lec13/themeContext";
// import Lec14 from "./Lec14/Lec14";

const router = createBrowserRouter([
  {
    path: "/", //http://localhost:3000/,
    element: <Lec15 />,
    errorElement: <Error />,
    children: [
      {
        path: "/home", //http://localhost:3000/home
        element: <Home />,
      },
      {
        path: "/profile", //http://localhost:3000/profile
        element: <Profile />,
      },
      {
        path: "/navbar", //http://localhost:3000/navbar
        element: <NavBar />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/products/:productId", //http://localhost:3000/products/p100
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return <A />;
}

export default App;
