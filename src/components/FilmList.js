import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {
    render() {
        const filmNodes = this.props.data.map(film => {
            return(<Film key={film.id}>
                {film.name}
                </Film>)
        })
        return (
            <div className="film-list">
            <h2>Film List</h2>
            {filmNodes}
            </div>
        )
    }
}

export default FilmList;