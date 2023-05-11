import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import AuthProvider from './context/authContext'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
