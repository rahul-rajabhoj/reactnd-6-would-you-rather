import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PollQuestion from './PollQuestion';
import PollResult from './PollResult';

class PollDetail extends React.Component {

    render() { 
        const { question, author, user, isAnswered, dispatch } = this.props

        return (
            <Fragment>
                { isAnswered === false && <PollQuestion question={question} user={user} dispatch={dispatch} author={author} /> }
                                
                {isAnswered === true && <PollResult question={question} user={user} author={author} /> }
            </Fragment>
        );
    }
}

function mapStateToProps({ questions, users, authedUser }, props) {
    const {question_id} = props.match.params
    const question = questions[question_id]
    const author = users[question.author]
    const user = users[authedUser]
    const isAnswered = Object.keys(user.answers).includes(question_id)
    return {
        question,
        author,
        user,
        isAnswered,
    }
}

export default connect(mapStateToProps)(PollDetail);
