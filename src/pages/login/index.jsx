import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form className="space-y-6" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="email"
          className={clsx('block text-sm font-medium leading-6 text-gray-900', {
            'text-red-400': !!errors['email'],
          })}
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={clsx(
              'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
              {
                'ring-red-500 focus:ring-red-500': !!errors['email'],
              }
            )}
            {...register('email', {
              required: 'Email is required...',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Please Provide valid email address',
              },
            })}
          />
        </div>
        {!!errors['email'] && (
          <p className="font-light text-red-500 text-sm">
            {errors['email'].message}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className={clsx(
              'block text-sm font-medium leading-6 text-gray-900',
              {
                'text-red-400': !!errors['password'],
              }
            )}
          >
            Password
          </label>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className={clsx(
              'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
              {
                'ring-red-500 focus:ring-red-500': !!errors['password'],
              }
            )}
            {...register('password', { required: 'Password is required...' })}
          />
        </div>
        {!!errors['password'] && (
          <p className="font-light text-red-500 text-sm">
            {errors['password'].message}
          </p>
        )}
      </div>

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

export default Login
