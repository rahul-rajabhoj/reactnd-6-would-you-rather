import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Header, Image, Label, Divider } from 'semantic-ui-react';

const trophyColor = ['yellow', 'grey', 'orange'];

class LeaderBoard extends React.Component {
    render() { 
        const { leaders } = this.props
        return (
            <Fragment>
                {leaders.map((leader, index) => (
                    <Segment.Group key={leader.id} className='leader-segment'>
                        <Label corner='left' icon='trophy' color={trophyColor[index]} />
                        <Grid divided padded>
                            <Grid.Row>
                                <Grid.Column width={4} verticalAlign='middle'>
                                    <Image src={leader.avatarURL} />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Header as='h3' textAlign='left'>
                                        {leader.name}
                                    </Header>
                                    <Grid>
                                        <Grid.Column width={12}>Answered questions</Grid.Column>
                                        <Grid.Column width={4}>{leader.answeredQuestion}</Grid.Column>
                                    </Grid>
                                    <Divider />
                                    <Grid>
                                        <Grid.Column width={12}>Created questions</Grid.Column>
                                        <Grid.Column width={4}>{leader.createdQuestion}</Grid.Column>
                                    </Grid>
                                </Grid.Column>
                                <Grid.Column width={4} textAlign='center'>
                                    <Segment.Group>
                                        <Header as='h5' block attached='top' content='Score' />
                                        <Segment>
                                            <Label circular color='green' size='big'>
                                                {leader.score}
                                            </Label>
                                        </Segment>
                                    </Segment.Group>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment.Group>
                ))}
            </Fragment>
        )
    }
}

function mapStateToProps({ users }) {
    const leaders = Object.values(users)
        .map((user) => ({
            ...user,
            answeredQuestion: Object.values(user.answers).length,
            createdQuestion: user.questions.length,
            score: Object.values(user.answers).length + user.questions.length
        }))
        .sort((a,b) => b.score - a.score)

    return {
        leaders
    }
}

export default connect(mapStateToProps)(LeaderBoard);
