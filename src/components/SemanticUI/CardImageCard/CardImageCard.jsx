import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
const CardImageCard = (data, cardType) => (

    <Card id={data.film.id} className="custom-card">
        <Image src={path + data.film.poster_path} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{data.film.title}</Card.Header>
            <Card.Meta>{data.film.original_title}</Card.Meta><br />
            <Card.Meta>Estreno: {data.film.release_date}</Card.Meta>
            <Card.Description>
                {data.film.tagline}
            </Card.Description>
        </Card.Content>
        {
            (cardType === 'detail' && data.film.homepage)
                ? `<Card.Content extra><Icon name='linkify' /><a href=${data.film.homepage}
                        title=${data.film.original_title}
                        target="_blank"
                        follow="no-follow">Sitio web</a></Card.Content>`
                : ''
        }

    </Card>
)

export default CardImageCard
