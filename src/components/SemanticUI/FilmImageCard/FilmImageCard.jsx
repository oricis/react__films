import React, { Component } from 'react'
import { Card, Image, Rating } from 'semantic-ui-react'
import './styles.scss';

const path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
class FilmImageCard extends Component
{

    render()
    {

        return (
            <Card className="custom-card"
                onClick={() => { this.openFilm(this.props.film.id); }}>
                <Image src={path + this.props.film.poster_path} wrapped ui={false} />
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
}

export default FilmImageCard
