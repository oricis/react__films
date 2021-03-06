import './film-list.scss';
import React, { Component } from 'react';
import FilmImageCard from '../../components/SemanticUI/FilmImageCard/FilmImageCard';

class FilmList extends Component
{

    render()
    {
        const filmCards = this.props.films.map((film, i) => {
            return <FilmImageCard
                key={i}
                film={film}
                onClick={(id) => { this.openFilm(id) }}
                ></FilmImageCard>
        });

        return (
            <section className="App-filmlist">
                <div className="cards">
                    {filmCards}
                </div>
            </section>
        );
    }


    /**
     * Custom methods
     *
     */

    openFilm = (id) =>
    {
        this.props.goToFilm(id);
    }
}

export default FilmList;
