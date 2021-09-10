import { PropTypes } from 'prop-types'
import React from 'react'
import { Redirect, Route } from 'react-router'

function ProtectedRoute({ component: Component, isAuth, setIsAuth, ...restOfProps }) {
  const isAuthenticated = isAuth
  console.log('this', isAuthenticated)

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated === true ? (
          <Component {...props} setIsAuth={setIsAuth} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isAuth: PropTypes.any.isRequired,
  setIsAuth: PropTypes.any.isRequired,
}

export default ProtectedRoute
