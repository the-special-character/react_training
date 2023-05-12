import React, { useContext, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { AuthContext } from '../context/authContext'
import ShoppingProvider from '../context/ShoppingContext'
import Header from '../components/header'
import CheckoutPanel from '../components/checkoutPanel'

function MainLayout() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useContext(AuthContext)

  if (!user) {
    return <Navigate to="/" />
  }

  const togglePanel = () => setOpen(val => !val)

  return (
    <ShoppingProvider>
      <Header logout={logout} togglePanel={togglePanel} />
      <Outlet />
      <CheckoutPanel open={open} togglePanel={togglePanel} />
    </ShoppingProvider>
  )
}

export default MainLayout
