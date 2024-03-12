import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import ContactUs from './components/ContactUs/ContactUs';
import ErrorPage from './components/ErrorPage';
import Projects from './components/Projects/Projects';
// import Footer from './components/Footer';



const router = createBrowserRouter([
  {
    path: "/Yaroslav-Bozhak-Portfolio/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Yaroslav-Bozhak-Portfolio/",
        element: <Home />,
      },
      {
        path: "/Yaroslav-Bozhak-Portfolio/About",
        element: <About />,
      },
      {
        path: "/Yaroslav-Bozhak-Portfolio/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Yaroslav-Bozhak-Portfolio/projects",
        element: <Projects />,
      },
      {
        path: "/Yaroslav-Bozhak-Portfolio/contact",
        element: <ContactUs />,
      },
    ],
    // path: "/Yaroslav-Bozhak-Portfolio/",
    // element: <Footer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

