import React from 'react'
import { connect } from 'react-redux'

class NewPoll extends React.Component {
    render() { 
        return (
            <div>
                NewPoll Component
            </div>
        );
    }
}

export default connect()(NewPoll);
