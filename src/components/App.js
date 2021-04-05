import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() { 
    return (
      <div className="App">
        APP Component
      </div>
    );
  }
}

export default connect()(App);
