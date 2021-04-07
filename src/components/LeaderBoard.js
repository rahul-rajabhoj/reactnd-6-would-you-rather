import React from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {
    render() { 
        const { leaders } = this.props
        return (
            <div>
                {leaders.map((leader) => (
                    <div key={leader.id}>
                        <img className='user-avatar-lg' src={leader.avatarURL} alt={leader.name}/>
                        <p>Name: {leader.name}</p>
                        <p>Answered Question: {leader.answeredQuestion}</p>
                        <p>Created Question: {leader.createdQuestion}</p>
                        <p>Score: {leader.score}</p>
                    </div>
                ))}
            </div>
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
