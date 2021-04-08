import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { handleAddQuestion } from '../actions/questions'
import { Segment, Header, Grid, Divider, Form } from 'semantic-ui-react';

class NewPoll extends React.Component {
    state = {
        optionOneText: '', 
        optionTwoText: '',
        isQuestionAdded: false
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { authedUser, dispatch } = this.props
        const { optionOneText, optionTwoText } = this.state

        if( optionOneText !== '' && optionTwoText !== '') {
            dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser));
            setTimeout(() => {
                this.setState({
                    optionOneText: '', 
                    optionTwoText: '',
                    isQuestionAdded: true
                })
            }, 1000)
        } else {
            alert('Please enter value for both fields !!')
        }
    }

    render() { 
        const { optionOneText, optionTwoText, isQuestionAdded } = this.state

        if(isQuestionAdded === true) {
            return <Redirect to='/' />
        }

        return (
            <Segment.Group>
                <Header as="h1" textAlign="center" block attached="top">
                    Create New Question
                </Header>
                <Grid padded>
                    <Grid.Column>
                        <p>Complete the question:</p>
                        <h3>Would you rather...</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Input
                                placeholder="Enter Option One Text Here"
                                name='optionOneText'
                                value={optionOneText}
                                onChange={this.handleChange}
                                required
                            />
                            <Divider horizontal>Or</Divider>
                            <Form.Input
                                placeholder="Enter Option Two Text Here"
                                name='optionTwoText'
                                value={optionTwoText}
                                onChange={this.handleChange}
                                required
                            />
                            <Form.Button positive size="tiny" fluid>
                                Submit
                            </Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Segment.Group>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewPoll);
