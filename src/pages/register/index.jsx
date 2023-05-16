import React from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import CustomForm from '../../components/customForm'
import registerFields from './fields'

function Register({ onRegister }) {
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
const mapDispatchToProps = dispatch => ({
  onRegister: data =>
    dispatch({
      type: 'REGISTER_REQUEST',
      payload: data,
      meta: { loadingId: -1 },
    }),
})

export default connect(null, mapDispatchToProps)(Register)
