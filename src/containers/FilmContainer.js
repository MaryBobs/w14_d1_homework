import React, {Component} from 'react';
import FilmList from '../components/FilmList';

class FilmContainer extends Component {
    render() {
        return(
            <div className="film-container">
            <h1>FilmContainer</h1>
            <FilmList/>
            </div>
        )
    }


}

export default FilmContainer;