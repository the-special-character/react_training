import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import CustomForm from '../../components/customForm'
import loginFields from './fields'
import { loginRequest } from '../../actions/userActions'

function Login({ onLogin }) {
  const form = useForm({
    mode: 'onBlur',
  })

  return <CustomForm fields={loginFields} onSubmit={onLogin} form={form} />
}

const mapDispatchToProps = dispatch => ({
  onLogin: data => loginRequest(data)(dispatch),
})

export default connect(null, mapDispatchToProps)(Login)
