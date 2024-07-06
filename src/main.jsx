import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Error from './components/Error.jsx';
import Home from './components/Home.jsx';
import CountryDetail from './components/CountryDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/contact",
      element: <div>Contact</div>,
    },
    {
      path: "/country/:country",
      element: <CountryDetail/>,
    }
  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
