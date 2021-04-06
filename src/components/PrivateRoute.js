import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoute ({component: Component, isLoggedIn, ...rest}) {
    return (
      <Route
        exact
        {...rest}
        render={(props) => isLoggedIn === true
          ? <Component {...props} />
          : <Redirect to='/login' />}
      />
    )
}

function mapStateToProps({ authedUser }) {
    return {
      isLoggedIn: authedUser === null ?false :true
    }
}
  
export default connect(mapStateToProps)(PrivateRoute)