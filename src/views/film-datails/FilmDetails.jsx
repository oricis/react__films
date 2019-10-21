import './film-details.scss';
import React, { Component } from 'react';
import FilmImageCard from '../../components/SemanticUI/FilmImageCard/FilmImageCard';
import { Card, Icon } from 'semantic-ui-react'

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

                {
                    (this.props.film.homepage)
                        ? <Card.Content extra><Icon name='linkify' />
                            <a href={this.props.film.homepage} title={this.props.film.original_title} target="_blank" follow="no-follow">Sitio web</a></Card.Content>
                        : ''
                }
            </div>
        );
    }
}

export default FilmDetails;
