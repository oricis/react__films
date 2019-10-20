import './film-details.scss';
import React, { Component } from 'react';

class FilmDetails extends Component
{


    render()
    {
        console.log('FilmDetails / render()', this.props.film);
        return (
            <div className="film-details">
                Contenido película - {this.props.film.title}
            </div>
        );
    }
}

export default FilmDetails;
