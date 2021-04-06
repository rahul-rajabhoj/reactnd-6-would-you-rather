import React from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {
    render() { 
        return (
            <div>
                LeaderBoard Component
            </div>
        );
    }
}

export default connect()(LeaderBoard);
