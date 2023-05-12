import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { StatusContext } from '../context/statusContext'

function RootLayout() {
  const { status } = useContext(StatusContext)

  const errors = status.filter(x => x.state === 'error')

  console.log(errors)

  return (
    <div className="relative">
      {errors.map((x, i) => (
        <div
          key={x.actionType}
          style={{
            bottom: i * 90 + 40,
          }}
          className="fixed right-10 z-50 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 w-full max-w-md"
          role="alert"
        >
          <p className="font-bold">Error</p>
          <p>{x.message}</p>
        </div>
      ))}

      <Outlet />
    </div>
  )
}

export default RootLayout
