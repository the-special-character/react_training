import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../components/header'
import CheckoutPanel from '../components/checkoutPanel'

function MainLayout({ user, logout }) {
  const [open, setOpen] = useState(false)

  if (!user) {
    return <Navigate to="/" />
  }

  const togglePanel = () => setOpen(val => !val)

  return (
    <>
      <Header logout={logout} togglePanel={togglePanel} />
      <Outlet />
      <CheckoutPanel open={open} togglePanel={togglePanel} />
    </>
  )
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'logout' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
