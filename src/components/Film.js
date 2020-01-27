import React, {Component} from 'react';

class Film extends Component {
    render() {
        return (
            <ul className="film">
            <a href={this.props.url} target="_blank">{this.props.children}</a>
            </ul>
        )
    }
}

export default Film;