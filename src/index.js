import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import Coin from './pages/Coin'
import reportWebVitals from './reportWebVitals';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

//     /                    render Main
//     /currencies          Currencies Page
//     /price               Price Page

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />, // yahoo main site
//     children: [ // pages
//       {
//         path: "/",
//         element:  <Main />,
//       },
//       {
//         path: "/",
//         element: <Currencies />,
//       },
//       {
//         path: "/coin/:symbol/:user",
//         element: <Coin />,
//       },
//     ]
//   },

// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router><App /></Router>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
