import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../actions/authedUser'

class Login extends React.Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    
    handleSubmit = (event) => {
        const { dispatch } = this.props
        event.preventDefault();
        dispatch(login(this.state.value))
    }

    render() { 
        const { value } = this.state
        const { authedUser, users } = this.props
        if(authedUser !== null) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Select User to Login:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option disabled value="">Select User</option>
                            { Object.keys(users).map((id) => (
                                <option key={id} value={id}>{users[id].name}</option>
                            ))}
                        </select>
                    </label>
                    <input type="submit" disabled={value === ''} value="Submit" />
                </form>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Login);
