import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Menu, Image, Button } from 'semantic-ui-react';
import { logout } from '../actions/authedUser'

class Nav extends React.Component {
    handleLogoutEvent = () => {
        const { dispatch } = this.props
        dispatch(logout())
    }

    render() { 
        const { authedUser, user } = this.props
        return (
            <Fragment>
                <Menu className='app-navbar' stackable>
                    <Menu.Item name='Home' as={NavLink} to='/' exact />
                    <Menu.Item name='New Question' as={NavLink} to='/add' />
                    <Menu.Item name='Leader Board' as={NavLink} to='/leaderboard' />
                    { authedUser && user && (<Fragment>
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <span>
                                    Hello, {user.name}
                                    <Image
                                        src={user.avatarURL}
                                        avatar
                                        spaced='left'
                                        verticalAlign='middle'
                                    />
                                </span>
                            </Menu.Item>
                            <Menu.Item>
                                <Button
                                    content='Logout'
                                    labelPosition='right'
                                    icon='log out'
                                    onClick={this.handleLogoutEvent}
                                />
                            </Menu.Item>
                        </Menu.Menu>
                    </Fragment>)}
                </Menu>
            </Fragment>
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
