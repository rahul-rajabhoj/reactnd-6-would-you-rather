import React, { Fragment } from 'react'
import { Segment, Header, Grid, Image, Button, Radio, Form } from 'semantic-ui-react';
import { handleSaveQuestionAnswer } from '../actions/users';

class PollQuestion extends React.Component {

    state = {
        value: ''
    };

    handleChange = (e, { value }) => this.setState({ value });

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.value !== '') {
            const { question, user, dispatch } = this.props
            dispatch(handleSaveQuestionAnswer(user.id, question.id, this.state.value))
        }
    };

    render() {
        const { question, author } = this.props
        const { value } = this.state
        return (
            <Segment.Group className='poll-segment'>
                <Header
                    as="h4"
                    textAlign="left"
                    block
                    attached="top"
                >
                    {author.name} asks:
                </Header>

                <Grid divided padded>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Image src={author.avatarURL} />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <Fragment>
                                <Header as="h2" textAlign="left">
                                    Would You Rather ...
                                </Header>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Field>
                                        <Radio
                                            label={question.optionOne.text}
                                            name="radioGroup"
                                            value="optionOne"
                                            checked={value === 'optionOne'}
                                            onChange={this.handleChange}
                                        />
                                        <br />
                                        <Radio
                                            label={question.optionTwo.text}
                                            name="radioGroup"
                                            value="optionTwo"
                                            checked={value === 'optionTwo'}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Button
                                            color="green"
                                            size="tiny"
                                            fluid
                                            positive
                                            disabled={value === ''}
                                            content="Submit"
                                        />
                                    </Form.Field>
                                </Form>
                            </Fragment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment.Group>
        )
    }
}

export default PollQuestion