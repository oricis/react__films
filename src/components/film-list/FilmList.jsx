import './film-list.scss';
import React, { Component } from 'react';
import FilmCard from '../film-card/FilmCard';
import PropTypes from 'prop-types';
import Film from '../../classes/Film.js';


class FilmList extends Component
{
    constructor(props)
    {
        super(props);

        // Set default values
        this.defaultFilmColor = 'green';
        this.state = {
            newFilmText: '',
            films: [],
        };
    }

    render()
    {

        return (
            <section className="App-film-list">
                <article className="content-box film-intro">
                    <label htmlFor="create-film">Introduce una tarea:</label>
                    <input type="text"
                        id="create-film"
                        value={this.state.newFilmText}
                        onChange={event =>
                            this.setState({ newFilmText: event.target.value })
                        }
                        onKeyUp={this.addFilm}/>

                    <button className="btn" onClick={this.cleanFilmInput}>
                        Clean
                    </button>
                </article>

                {
                    (this.state.films.length > 0)
                        ? <FilmCard data={this.state.films[0]}></FilmCard>
                        : ''
                }
            </section>
        );
    }

    componentDidUpdate()
    {
        console.log('tareas: ' + this.state.films.length); // HACK:
    }


    /**
     * Custom methods
     *
     */

    addFilm = (event) =>
    {
        if (event.key === 'Enter') {
            // const text  = document.getElementById('create-film').value.trim();
            const text     = event.target.value.trim();
            const newFilm  = this.createFilm(text, this.defaultFilmColor);
            const arrFilms = [...this.state.films, newFilm];

            this.setState({
                newFilmText: '',
                films: arrFilms
            });
        }
    }

    cleanFilmInput = () =>
    {
        this.setState({
            newFilmText: ''
        });
    }

    createFilm = (text: PropTypes.string, color: PropTypes.string) =>
    {
        let filmsLength = this.state.films.length;
        const filmText = text || 'Film ' + ++filmsLength;

        return new Film(filmText, color);
    }

    completeFilm = (id: PropTypes.string) =>
    {
        const arrFilms = this.markFilmAsCompleted(this.state.films, id);
        this.setState({
            films: arrFilms
        });
    }

    deleteFilm = (id: PropTypes.string) =>
    {
        const arrFilms = this.state.films.filter(film => film.id !== id);
        this.setState({
            films: arrFilms
        });
    }

    markFilmAsCompleted(films: PropTypes.array, filmId: PropTypes.string)
    {
        films.forEach(film => {
            if (film.id === filmId) {
                film.completed = true;
            }
        });

        return films;
    }
}

export default FilmList;
