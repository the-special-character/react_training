import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './app'
import User from './user'
import Test from './test'

const container = document.getElementById('app')
const root = createRoot(container)

// const bgColor = 'red'
// const color = '#fff'

root.render(
  <>
    {/* <App title="Virat Kohli" number={10} />
    <App title="Rohit Sharma" desc="Opening Batsman" number={45} />
    <User firstName="Yagnesh" lastName="Modh" age={36} gender="male" /> */}
    <User firstName="Rohit" lastName="Sharma" age={32} gender="male" />
    <Test />
  </>
)
