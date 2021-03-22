import React from 'react'
import 'styles/global/App.css'
import { BrowserRouter } from 'react-router-dom'
import routesList from 'routes'
import renderRoutes from 'routes/renderRoutes'
import { SessionProvider } from 'context/baseRoutes/context/SessionContext'
import { LoadingProvider } from 'context/load/context'

import ReactNotification from 'react-notifications-component'

function App () { 
  return (
    <>
        <SessionProvider>
          <LoadingProvider>
            <ReactNotification />
            <BrowserRouter>
              {renderRoutes(routesList)}
            </BrowserRouter>
          </LoadingProvider>
        </SessionProvider>
    </>
  )
}

export default App