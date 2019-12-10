import './film-details.scss';
import React, { Component } from 'react';
import URIFilter from '../../services/URIFilter.service.js';
import FilmImageCard from '../../components/SemanticUI/FilmImageCard/FilmImageCard';
import { Card, Icon } from 'semantic-ui-react'

class FilmDetails extends Component
{

    render()
    {
        const filmURL = (this.props.film.homepage
            && URIFilter.clean(this.props.film.homepage, ['torrent']))
            ? this.props.film.homepage
            : '';

        const homepage = (filmURL)
            ? <Card.Content extra><Icon name='linkify' />
                <a href={filmURL} title={this.props.film.original_title} target="_blank" follow="no-follow">Sitio web</a></Card.Content>
            : '';

        return (
            <div className="film-details">
                <FilmImageCard
                    cardType="detail"
                    film={this.props.film}
                    onClick={() => {}}
                ></FilmImageCard>

                {homepage}
            </div>
        );
    }
}

export default FilmDetails;
