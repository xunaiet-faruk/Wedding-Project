import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route.jsx'
import Context from './Configcontext/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Context>
      <RouterProvider router={Route} />
  </Context>
  </React.StrictMode>,
)
