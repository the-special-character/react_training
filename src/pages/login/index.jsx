import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import CustomForm from '../../components/customForm'
import loginFields from './fields'

function Login({ onLogin }) {
  const form = useForm({
    mode: 'onBlur',
  })

  return <CustomForm fields={loginFields} onSubmit={onLogin} form={form} />
}

const mapDispatchToProps = dispatch => ({
  onLogin: data =>
    dispatch({ type: 'LOGIN_REQUEST', payload: data, meta: { loadingId: -1 } }),
})

export default connect(null, mapDispatchToProps)(Login)
