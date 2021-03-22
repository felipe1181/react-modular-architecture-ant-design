import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { session } from 'api/helpers/storage/localStorage'

export default function RouteIsAuth (props) {
  const { location } = props
  const { token } = session()
  if (token) {
    return <Redirect to={{ pathname: '/dashboard', state: { from: location } }} />
  }

  return (
    <Route {...props} />
  )
}
RouteIsAuth.propTypes = {
  location: PropTypes.any
}
