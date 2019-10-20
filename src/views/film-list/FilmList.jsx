import './film-list.scss';
import React, { Component } from 'react';
import CardImageCard from '../../components/SemanticUI/CardImageCard/CardImageCard';

class FilmList extends Component
{

    render()
    {
        const filmCards = this.props.films.map((film, i) => {
            return <CardImageCard
                key={i}
                film={film}
                onClick={(id) => { this.openFilm(id) }}
                ></CardImageCard>
        });

        return (
            <section className="App-filmlist">
                <div className="cards">
                    {filmCards}
                </div>
            </section>
        );
    }

    componentDidUpdate()
    {
        console.log('FilmList / componentDidUpdate() - Fimls: ' + this.props.films.length); // HACK:
    }


    /**
     * Custom methods
     *
     */

    openFilm = (id: PropTypes.string) =>
    {
        console.log('openFilm() - id: ' + id); // HACK:
    }
}

export default FilmList;
