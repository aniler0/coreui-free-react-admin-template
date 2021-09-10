import React from 'react'
import PropTypes from 'prop-types'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
const DefaultLayout = ({ setIsAuth }) => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader setIsAuth={setIsAuth} />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

DefaultLayout.propTypes = {
  setIsAuth: PropTypes.func.isRequired,
}

export default DefaultLayout
