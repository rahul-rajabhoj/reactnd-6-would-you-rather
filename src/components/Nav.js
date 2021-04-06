import React from 'react'
import { connect } from 'react-redux'

class Nav extends React.Component {
    render() { 
        return (
            <div>
                Nav Component
            </div>
        );
    }
}

export default connect()(Nav);
