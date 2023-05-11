import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import CustomForm from '../../components/customForm'
import registerFields from './fields'
import { AuthContext } from '../../context/authContext'

function Register() {
  const { onRegister } = useContext(AuthContext)

  const form = useForm({
    mode: 'onBlur',
  })

  return (
    <CustomForm
      fields={registerFields}
      onSubmit={data => onRegister(data, form.setError)}
      form={form}
    />
  )
}

export default Register
