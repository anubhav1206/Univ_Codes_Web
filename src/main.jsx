import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import NotFound from './Pages/NotFound/NotFound'
import Home from './Pages/Home/Home'
import Materias from './Pages/Materias/Materias'

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
    element: <p>Fichero</p>,
    errorElement: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
