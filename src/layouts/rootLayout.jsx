import React from 'react'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="relative">
      {[...Array(3).keys()].map(x => (
        <div
          key={x}
          style={{
            bottom: x * 90 + 40,
          }}
          className="fixed right-10 z-50 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold">Be Warned</p>
          <p>Something not ideal might be happening.</p>
        </div>
      ))}

      <Outlet />
    </div>
  )
}

export default RootLayout
