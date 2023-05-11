import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import NotFound from './pages/notFound'
import About from './pages/about'
import Contact from './pages/contact'
import RootLayout from './layouts/rootLayout'
import AuthLayout from './layouts/authLayout'
import MainLayout from './layouts/mainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: '/',
            element: <Login />,
          },
          {
            path: 'register',
            element: <Register />,
          },
        ],
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: 'dashboard',
            element: <Home />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'contact',
            element: <Contact />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
