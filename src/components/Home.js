import React from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react';
import Poll from './Poll';

class Home extends React.Component {
    render() { 
        const { answeredQuestionsId, unansweredQuestions } = this.props
        return (
            <Tab panes={panes({ answeredQuestionsId, unansweredQuestions })} className="tab" />
        )
    }
}

const panes = props => {
    const { answeredQuestionsId, unansweredQuestions} = props;
    return [
      {
        menuItem: 'Unanswered Questions',
        render: () => (
          <Tab.Pane>
            {unansweredQuestions.map(question => (
              <Poll
                key={question.id}
                question_id={question.id}
              />
            ))}
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Answered Questions',
        render: () => (
          <Tab.Pane>
            {answeredQuestionsId.map(id => (
              <Poll
                key={id}
                question_id={id}
              />
            ))}
          </Tab.Pane>
        )
      }
    ];
  };


function mapStateToProps({ authedUser, users, questions}) {

    const answeredQuestionsId = Object.keys(users[authedUser].answers).reverse()
  
    const unansweredQuestions = Object.values(questions)
        .filter( question => !answeredQuestionsId.includes(question.id))
        .sort((a,b) => b.timestamp - a.timestamp)
  
    return {
      answeredQuestionsId,
      unansweredQuestions,
    }
}

export default connect(mapStateToProps)(Home);
