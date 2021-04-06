import React from 'react'
import { connect } from 'react-redux'

class PollDetail extends React.Component {
    render() { 
        return (
            <div>
                PollDetail Component
            </div>
        );
    }
}

export default connect()(PollDetail);
