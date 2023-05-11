import clsx from 'clsx'
import React, { useState } from 'react'
import EyeOffIcon from '../../assets/icons/visibility_off.svg'
import EyeIcon from '../../assets/icons/visibility.svg'

function TextInput({
  field,
  fieldState: { error },
  extraProps: { label, type, ...props },
}) {
  const [pType, setPType] = useState(type || 'text')

  const toggleType = () =>
    setPType(val => (val === 'password' ? 'text' : 'password'))

  return (
    <div>
      <label
        htmlFor="email"
        className={clsx('block text-sm font-medium leading-6 text-gray-900', {
          'text-red-400': !!error,
        })}
      >
        {label}
      </label>
      <div className="mt-2 relative">
        <input
          type={pType}
          className={clsx(
            'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            {
              'ring-red-500 focus:ring-red-500': !!error,
            }
          )}
          {...field}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={toggleType}
            className="absolute right-2 top-0 py-1.5"
          >
            {pType === 'password' ? (
              <EyeIcon height={24} width={24} />
            ) : (
              <EyeOffIcon height={24} width={24} />
            )}
          </button>
        )}
      </div>
      {!!error && (
        <p className="font-light text-red-500 text-sm">{error.message}</p>
      )}
    </div>
  )
}

export default TextInput
