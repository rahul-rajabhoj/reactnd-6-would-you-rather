import React from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { handleInitialData } from '../actions/shared'

class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() { 
    return (
      <div className="App">
        <LoadingBar></LoadingBar>
        App Component
      </div>
    );
  }
}

export default connect()(App);
