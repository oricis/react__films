import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardImageCard = () => (
    <Card>
        <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
        <Card.Content>
            <Card.Header>{this.props.film.title}
                ({this.props.film.original_title})</Card.Header>
            <Card.Meta>Estreno: {this.props.film.release_date}</Card.Meta>
            <Card.Description>
                {this.props.film.tagline}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            {
                (this.props.film.homepage)
                    ? <Icon name='linkify' />
                    : ''

                (this.props.film.homepage)
                    ? `<a href=${this.props.film.homepage}
                        title=${this.props.film.original_title}
                        target="_blank"
                        follow="no-follow">Sitio web</a>`
                    : 'Sitio web no disponible.'
            }
        </Card.Content>
    </Card>
)

export default CardImageCard
