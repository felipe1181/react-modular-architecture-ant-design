import React, { createContext } from 'react'
import PropTypes from 'prop-types'
const SessionContext = createContext({ loading: false })

export function SessionProvider ({ children }) {
  return (
    <SessionContext.Provider value={{ session: false }}>
      {children}
    </SessionContext.Provider>
  )
}
SessionProvider.propTypes = {
  children: PropTypes.any
}
export default SessionContext
