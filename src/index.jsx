import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './router'

import store from './configureStore'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
