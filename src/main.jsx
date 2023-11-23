import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/globalstyles'

import MyRoutes from './routes/routes'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRoutes/>
    </BrowserRouter>
    <GlobalStyle/>
  </React.StrictMode>,
)
