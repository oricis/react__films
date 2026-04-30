import React, { Component } from 'react'
import { Card, Image, Rating } from 'semantic-ui-react'
import './styles.scss';

const posterBaseUrl = 'https://image.tmdb.org/t/p/w342';

class FilmImageCard extends Component
{

    render()
    {
        const posterUrl = this.getPosterUrl(this.props.film.poster_path);

        return (
            <Card className="custom-card"
                onClick={() => { this.openFilm(this.props.film.id); }}>
                {
                    posterUrl
                        ? <Image src={posterUrl} wrapped ui={false} />
                        : <div className="poster-placeholder">Sin imagen</div>
                }
                <Card.Content>
                    {
                        (this.props.cardType === 'detail'
                            && this.props.film.homepage)
                            ? <Card.Meta>
                                <Rating defaultRating={this.props.film.vote_average / 2} maxRating={5} disable="true" />
                            </Card.Meta>
                            : ''
                    }
                    <Card.Header>{this.props.film.title}</Card.Header>
                    <Card.Meta>{this.props.film.original_title}</Card.Meta><br />
                    <Card.Meta>Estreno: {this.props.film.release_date}</Card.Meta>
                    <Card.Description>
                        {
                            (this.props.cardType === 'detail'
                                && this.props.film.overview)
                                ? this.props.film.overview
                                : this.props.film.tagline
                        }
                    </Card.Description>
                </Card.Content>
            </Card >
        );
    }


    openFilm = (id) => {
        this.props.onClick(id);
    }

    getPosterUrl = (posterPath) => {
        if (!posterPath) {
            return null;
        }

        return `${posterBaseUrl}${posterPath}`;
    }
}

export default FilmImageCard
