import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const LoadingContext = createContext('teste')

export function LoadingProvider ({ children }) {
  const [loadingReference, setLoadingReference] = useState('')

  return (
    <LoadingContext.Provider value={{ loadingReference, setLoadingReference }}>
      {children}
    </LoadingContext.Provider>
  )
}
LoadingProvider.propTypes = {
  children: PropTypes.any
}
export default LoadingContext
