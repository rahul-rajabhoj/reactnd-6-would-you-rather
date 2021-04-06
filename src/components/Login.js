import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    render() { 
        const { authedUser } = this.props
        if(authedUser !== null) {
            return <Redirect to='/' />
        }

        return (
            <div>
                Login Component
            </div>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Login);
