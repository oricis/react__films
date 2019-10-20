import './film-list.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
// import CardImageCard from '../../components/SemanticUI/CardImageCard/CardImageCard';

class FilmList extends Component
{

    render()
    {
        const filmCards = [];
        return (
            <section className="App-filmlist">


                <p>Retrieved Films: {this.props.films.length}</p>
                <Loader active inline='centered' />

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
