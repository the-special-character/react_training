import React, { useContext, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import { AuthContext } from '../context/authContext'
import Header from '../components/header'
import CheckoutPanel from '../components/checkoutPanel'
import { logoutRequest } from '../actions/userActions'

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
  logout: () => logoutRequest()(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
