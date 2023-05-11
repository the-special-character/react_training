import React from 'react'
import { Controller } from 'react-hook-form'

function CustomForm({
  fields,
  onSubmit,
  form: {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  },
}) {
  return (
    <form className="space-y-6" noValidate onSubmit={handleSubmit(onSubmit)}>
      {errors['serverError'] && (
        <p className="text-center font-semibold text-xl text-red-500">
          {errors['serverError'].message}
        </p>
      )}
      {fields.map(({ extraProps, component: Component, ...x }) => (
        <Controller
          key={x.name}
          control={control}
          render={props => <Component extraProps={extraProps} {...props} />}
          {...x}
        />
      ))}
      <div>
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait"
        >
          Sign in
        </button>
      </div>
    </form>
  )
}

export default CustomForm
