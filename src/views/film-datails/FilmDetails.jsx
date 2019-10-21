import './film-details.scss';
import React, { Component } from 'react';
import FilmImageCard from '../../components/SemanticUI/FilmImageCard/FilmImageCard';

class FilmDetails extends Component
{


    render()
    {
        console.log('FilmDetails / render()', this.props.film);
        return (
            <div className="film-details">
                <FilmImageCard
                    cardType="detail"
                    film={this.props.film}
                    onClick={() => {}}
                ></FilmImageCard>
            </div>
        );
    }
}

export default FilmDetails;
