import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import {createBrowserRouter,Router,RouterProvider} from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error/>,
      
      children: [
        {
            path: "/",
            element: <Home/>,
          },
        {
            path: "/contact",
            element: <Contact/>,
          },
        {
            path: "/:country",
            element: <CountryDetail/>,
          },
      
      

      ]
    },
   
  ]);

  console.log(router)


const root = createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>)