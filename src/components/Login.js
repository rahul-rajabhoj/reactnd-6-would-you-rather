import React from 'react'
import { connect } from 'react-redux'

class Login extends React.Component {
    render() { 
        return (
            <div>
                Login Component
            </div>
        );
    }
}

export default connect()(Login);
