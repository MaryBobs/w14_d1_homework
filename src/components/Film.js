import React, {Component} from 'react';

class Film extends Component {
    render() {
        return (
            <h3>{this.props.children}</h3>
        )
    }
}

export default Film;