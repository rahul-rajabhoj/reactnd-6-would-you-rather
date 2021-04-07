import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'

import { handleInitialData } from '../actions/shared'
import PrivateRoute from './PrivateRoute'
import Nav from './Nav'
import LeaderBoard from './LeaderBoard'
import NewPoll from './NewPoll'
import Login from './Login'
import PollDetail from './PollDetail'
import Home from './Home'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            <Nav />
            <div>
              <PrivateRoute path='/' component={Home} />
              <Route path='/login' component={Login} />
              <PrivateRoute path='/add' component={NewPoll} />
              <PrivateRoute path='/leaderboard' component={LeaderBoard} />
              <PrivateRoute path='/questions/:question_id' component={PollDetail} />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App)
