import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
    handleLogoutEvent = () => {
        // todo: add logic to logout user
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
                            Hello {user.name} <img src='' alt='' />
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
