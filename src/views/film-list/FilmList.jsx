import './film-list.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilmList extends Component
{
    constructor(props)
    {
        super(props);

        // Set default values
        this.state = {
            films: [],
        };
    }

    render()
    {

        return (
            <section className="App-filmlist">
                // Filmm searcher

                {
                    (this.state.films.length > 0)
                        ? '<Card></Card>'
                        : ''
                }
            </section>
        );
    }

    componentDidUpdate()
    {
        console.log('componentDidUpdate() - Fimls: ' + this.state.films.length); // HACK:
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
