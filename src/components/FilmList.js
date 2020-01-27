import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {
    render() {
        return (
            <div className="film-list">
            <h2>Film List</h2>
            <Film />
            </div>
        )
    }
}

export default FilmList;