import React from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app')
const root = createRoot(container)

const bgColor = 'red'
const color = '#fff'

// 1. first letter should be always capital
// 2. return single element from the component
// 3. apply inline style as object and propties should be in camelCase
function App() {
  return (
    <>
      <h1
        style={{
          backgroundColor: bgColor,
          color,
        }}
      >
        Yagnesh Modh
      </h1>
      <h2>Full-stack developer</h2>
      <input />
      <div />
      <div />
    </>
  )
}

function Test() {
  return <h3>Hello world</h3>
}

root.render(
  <>
    <App />
    <Test />
  </>
)
