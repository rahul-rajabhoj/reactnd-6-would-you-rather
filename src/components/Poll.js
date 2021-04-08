import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Segment, Header, Grid, Image, Button } from 'semantic-ui-react';

class Poll extends React.Component {

    state = {
        viewQuestion: false
    }

    handleClick = e => {
        this.setState({
            viewQuestion: true
        });
    };

    render() {
        const { users, questions, question_id } = this.props
        const { viewQuestion } = this.state

        if(viewQuestion === true){
           return <Redirect push to={`/questions/${question_id}`} />
        } 

        const question = questions[question_id]
        const author = users[question.author]
        
        return (
            <Segment.Group className='poll-segment'>
                <Header
                    as="h5"
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
                            <Header as="h5" textAlign="left">
                                Would you rather
                            </Header>
                            <p style={{ textAlign: 'center' }}>
                                {question.optionOne.text}
                                <br />
                                or...
                            </p>
                            <Button
                                color='green'
                                basic
                                fluid
                                onClick={this.handleClick}
                                content='View Poll'
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment.Group>
        );
    }
}

function mapStateToProps({ users, questions }) {
    return {
        users,
        questions,
    }
}

export default connect(mapStateToProps)(Poll);