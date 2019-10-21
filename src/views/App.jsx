import '../assets/styles/App.scss';
import React, { Component } from 'react';
import FilmDetails from './film-datails/FilmDetails';
import FilmList from './film-list/FilmList';
import Footer from './footer/Footer';
import Header from './header/Header';
import AxiosApi from '../services/AxiosApi.service.js';
import HorizontalMenu from '../components/SemanticUI/HorizontalMenu/HorizontalMenu';

class App extends Component
{
    constructor()
    {
        super();

        this.categories = ['upcoming', 'top_rated', 'popular'];
        this.state = {
            category: '',
            currentFilmId: null,
            error: '',
            films: [],
        };
    }

    componentDidMount() // before render()
    {
        this.getFilms(this.categories[0]);
    }


    render()
    {
        const pageSubtitle = (this.state.category)
            ? this.state.category + ' Films'
            : this.pageSubtitle;

        return (
            <div className='App'>
                <Header pageSubtitle={pageSubtitle}></Header>
                <nav>
                    <HorizontalMenu
                        categories={this.categories}
                        activeIndex={this.categories[0]}
                        onSelectedMenuItem={(category) => { this.getFilms(category); }}
                        ></HorizontalMenu>
                </nav>
                {
                    (this.state.currentFilmId)
                        ? <FilmDetails film={this.state.films}></FilmDetails>
                        : <FilmList
                            films={this.state.films}
                            goToFilm={(id) => { this.getFilm(id); }}></FilmList>
                }
                <Footer></Footer>
            </div>
        );
    }


    /**
     * Custom methods
     *
     */

    async getFilm(filmId)
    {
        if (this.state.currentFilmId !== filmId) {
            try {
                const data = await AxiosApi.getMovieById(filmId);
                this.setState({
                    category: '',
                    currentFilmId: filmId,
                    films: data,
                    error: '',
                });

            } catch {
                this.setState({
                    category: '',
                    currentFilmId: filmId,
                    error: 'Fail fetching the movie with ID: ' + filmId,
                });
            }
        }
    }

    async getFilms(category)
    {
        category = (category) ? category : this.categories[0];

        if (this.state.category !== category) {
            try {
                const data = await AxiosApi.getMoviesByCategory(category);
                this.setState({
                    category: category,
                    currentFilmId: null,
                    films: data.results,
                    error: '',
                });
            } catch {
                this.setState({
                    category: category,
                    currentFilmId: null,
                    error: 'Fail fetching movies',
                });
            }
        }
    }
}

export default App;
