import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import CustomForm from '../../components/customForm'
import loginFields from './fields'
import { AuthContext } from '../../context/authContext'

function Login() {
  const { onLogin } = useContext(AuthContext)
  const form = useForm({
    mode: 'onBlur',
  })

  return (
    <CustomForm
      fields={loginFields}
      onSubmit={data => onLogin(data, form.setError)}
      form={form}
    />
  )
}

export default Login
