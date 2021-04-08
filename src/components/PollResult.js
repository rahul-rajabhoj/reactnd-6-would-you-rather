import React, { Fragment } from 'react'
import { Segment, Header, Progress, Label, Icon, Grid, Image } from 'semantic-ui-react';

const YourVoteLabel = () => (
    <Label color="yellow" ribbon="right" className="vote">
      <Icon name="check circle outline" size="big" className="compact" />
      <div style={{ float: 'right' }}>
        Your
        <br />
        Vote
      </div>
    </Label>
);


const styles = {
    primary: {
      color: 'green',
      bgColor: 'honeydew'
    },
    secondary: {
      color: 'grey',
      bgColor: '#f4f4f4'
    }
};

const PollResult = (props) => {
    const { question, user, author } = props

    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const votesTotal = optionOneVotes + optionTwoVotes;
    const userVote = user.answers[question.id];

    let option1 = styles.secondary,
        option2 = styles.secondary;
    if (optionOneVotes > optionTwoVotes) {
        option1 = styles.primary;
    } else if (optionTwoVotes > optionOneVotes) {
        option2 = styles.primary;
    }

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
                    <Grid.Column textAlign='center' width={5}>
                        <Image verticalAlign='middle' src={author.avatarURL} />
                    </Grid.Column>
                    <Grid.Column width={11}> 
                        <Fragment>
                            <Header as="h3">
                                Results:
                            </Header>
                            <Segment
                                color={option1.color}
                                style={{ backgroundColor: `${option1.bgColor}` }}
                            >
                                {userVote === 'optionOne' && <YourVoteLabel />}
                                <p style={{ fontWeight: 'bold' }}>Would you rather {question.optionOne.text}?</p>
                                <Progress
                                    percent={((optionOneVotes / votesTotal) * 100).toFixed(2)}
                                    progress
                                    color={option1.color}
                                >
                                    {optionOneVotes} out of {votesTotal} votes
                                </Progress>
                            </Segment>
                            <Segment
                                color={option2.color}
                                style={{ backgroundColor: `${option2.bgColor}` }}
                            >
                                {userVote === 'optionTwo' && <YourVoteLabel />}

                                <p style={{ fontWeight: 'bold' }}>Would you rather {question.optionTwo.text}?</p>
                                <Progress
                                    percent={((optionTwoVotes / votesTotal) * 100).toFixed(2)}
                                    progress
                                    color={option2.color}
                                >
                                    {optionTwoVotes} out of {votesTotal} votes
                                </Progress>
                            </Segment>
                        </Fragment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment.Group>
    )
}

export default PollResult