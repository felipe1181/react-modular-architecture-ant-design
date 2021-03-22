import React from 'react' 
import PropTypes from 'prop-types'
import renderRoutes from 'routes/renderRoutes'
import usePrevious from 'context/baseRoutes/usePrevious'
import { PreviousPathnameContext } from 'context/baseRoutes/context'

const RootScreen = ({ route, location }) => {
  const { pathname } = location

  const previousPathname = usePrevious(pathname)

  return (
    <PreviousPathnameContext.Provider value={previousPathname}>

      <div>
        {renderRoutes(route.routes)}
      </div>

    </PreviousPathnameContext.Provider>
  )
}
RootScreen.propTypes = {
  route: PropTypes.any,
  location:PropTypes.any,
}
export default RootScreen