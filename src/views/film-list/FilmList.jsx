import './film-list.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilmList extends Component
{

    render()
    {

        return (
            <section className="App-filmlist">
                <p>Retrieved Films: {this.props.films.length}</p>

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
