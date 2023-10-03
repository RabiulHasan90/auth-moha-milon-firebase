import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from './Mainlayout.jsx'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/register.jsx'
import Authprovider from './Components/Authprovider/Authprovider.jsx'
import Privateroute from './Components/Privateroute.jsx'
import Orders from './Components/Orders.jsx'
const router = createBrowserRouter([{
  path: "/",
  element: <Mainlayout />,
  children: [{
    path: "/",
    element:<Home />
  },
    {
    path: "/login",
    element:<Login />
    },
    {
    path: "/register",
    element: <Register />
    },
      {
    path: "/orders",
    element: <Privateroute><Orders /></Privateroute>
  },
  
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider >
       <RouterProvider router={router}/>
  </Authprovider>
  </React.StrictMode>,
)
