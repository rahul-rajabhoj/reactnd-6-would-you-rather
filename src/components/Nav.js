import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/authedUser'

class Nav extends React.Component {
    handleLogoutEvent = () => {
        const { dispatch } = this.props
        dispatch(logout())
    }

    render() { 
        const { authedUser, user } = this.props
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' exact>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact>
                            Leader Board
                        </NavLink>
                    </li>
                    { authedUser && user && (<Fragment>
                        <li>
                            Hello {user.name} <img className='user-avatar-sm' src={user.avatarURL} alt={user.name} />
                        </li>
                        <li>
                            <button onClick={this.handleLogoutEvent}>
                                Logout
                            </button>
                        </li>
                    </Fragment>)}
                </ul>
            </nav>
        );
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(Nav);
