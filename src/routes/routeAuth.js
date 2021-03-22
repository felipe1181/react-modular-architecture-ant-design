import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { session } from 'api/helpers/storage/localStorage'

import PropTypes from 'prop-types'

function RouteAuth (props) {
  const { location } = props
  const { token } = session()

  if (!token) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />
  }

  return (
    <Route {...props} />
  )
}
RouteAuth.propTypes = {
  location: PropTypes.any
}
export default RouteAuth
