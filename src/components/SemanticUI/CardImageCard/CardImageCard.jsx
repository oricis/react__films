import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
class CardImageCard extends Component
{

    render()
    {

        return (
            <Card id={this.props.film.id} className="custom-card">
                <Image src={path + this.props.film.poster_path} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.film.title}</Card.Header>
                    <Card.Meta>{this.props.film.original_title}</Card.Meta><br />
                    <Card.Meta>Estreno: {this.props.film.release_date}</Card.Meta>
                    <Card.Description>
                        {this.props.film.tagline}
                    </Card.Description>
                </Card.Content>
                    {
                        (this.props.cardType === 'detail'
                            && this.props.film.homepage)
                            ? `<Card.Content extra><Icon name='linkify' /><a href=${this.props.film.homepage} title=${this.props.film.original_title} target="_blank" follow="no-follow">Sitio web</a></Card.Content>`
                            : ''
                    }
                </Card >
        );
    }
}

export default CardImageCard
