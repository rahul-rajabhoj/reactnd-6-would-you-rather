import React from 'react'
import { connect } from 'react-redux'

class PollDetail extends React.Component {
    render() { 
        const { question_id } = this.props
        console.log(question_id)
        return (
            <div>
                PollDetail Component
            </div>
        );
    }
}

function mapStateToProps({ questions, users, authedUser }, props) {
    const {question_id} = props.match.params
    const question = questions[question_id]
    const user = users[authedUser]
    return {
        question,
        user,
        question_id,
    }
}

export default connect(mapStateToProps)(PollDetail);
