import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Materias from './Pages/Materias'
import Ficheros from './Pages/Ficheros'

import { Analytics } from '@vercel/analytics/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/materias/:name",
    element: <Materias />,
    errorElement: <NotFound />
  },
  {
    path: "/ficheros/:sha",
    element: <Ficheros />,
    errorElement: <NotFound />
  },
  {
    path: "/*",
    element: <NotFound />,
    errorElement: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>,
)
