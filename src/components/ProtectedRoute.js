import { PropTypes } from 'prop-types'
import React from 'react'
import { Redirect, Route } from 'react-router'

function ProtectedRoute({ component: Component, isAuth, ...restOfProps }) {
  const isAuthenticated = isAuth
  console.log('this', isAuthenticated)

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isAuth: PropTypes.any.isRequired,
}

export default ProtectedRoute
