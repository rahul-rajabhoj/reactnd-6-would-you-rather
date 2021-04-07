import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Segment, Grid, Header, Image, Form} from 'semantic-ui-react';
import { login } from '../actions/authedUser'

class Login extends React.Component {

    state = {
        userId: ''
    }

    handleChange = (e, { value }) => {
        this.setState({ userId: value })
    }
    
    handleSubmit = (event) => {
        const { dispatch } = this.props
        const { userId } = this.state
        event.preventDefault();
        if(userId !== '') 
            dispatch(login(userId))
        else 
            alert('Please select a user to sign in !!')
    }

    render() { 
        const { userId } = this.state
        const { authedUser, users } = this.props
        if(authedUser !== null) {
            return <Redirect to='/' />
        }

        return (
            <Fragment>
                <Segment.Group>
                    <Header as='h4' block attached='top' textAlign='center'>
                        <Header.Content>Welcome to the Would You Rather App!</Header.Content>
                        <Header.Subheader>Please sign in to continue</Header.Subheader>
                    </Header>
                    <div>
                        <Grid padded textAlign='center'>
                            <Grid.Row className='login-grid'>
                                <Grid.Column width={16}>
                                    <Image src='/images/logo192.png' centered />
                                    <br />
                                    <Form onSubmit={this.handleSubmit}>
                                        <Header as='h2' color='green'>
                                            Sign in
                                        </Header>
                                        <Form.Dropdown
                                            placeholder='Select User'
                                            fluid
                                            selection
                                            options={users}
                                            value={userId}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <Form.Button content='Sign in' positive fluid />
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                </Segment.Group>
            </Fragment>
        );
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users: Object.keys(users).map(id => ({
            key: id,
            text: users[id].name,
            value: id,
            image: { avatar: true, src: users[id].avatarURL }
        }))
    }
}

export default connect(mapStateToProps)(Login);
