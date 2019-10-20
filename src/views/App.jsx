import '../assets/styles/App.scss';
import React,  { Component } from 'react';
import FilmList from './film-list/FilmList';
import Footer from './footer/Footer';
import Header from './header/Header';
import AxiosApi from '../services/AxiosApi.service.js';

class App extends Component
{
    constructor()
    {
        super();

        this.categories = ['top_rated', 'upcoming', 'popular'];
        this.data = [];
        this.pageSubtitle = '';

        this.state = {
            category: '',
            fetched:  0,
            films:    [],
            error:    '',
        };
    }

    componentDidMount() // before render()
    {
        this.getFilms(this.categories[0]);
    }

    componentDidUpdate() // after render()
    {
        console.log('componentDidUpdate() - FILMS: ', this.state.films);
    }

    render()
    {
        const pageSubtitle = (this.state.category)
            ? this.state.category + ' Films'
            : this.pageSubtitle;
        console.log('@@@@@@@@', this.state.films);

        return (
            <div className='App'>
                <Header pageSubtitle={pageSubtitle}></Header>
                <FilmList films={this.state.films}></FilmList>
                <Footer></Footer>
            </div>
        );
    }


    /**
     * Custom methods
     *
     */

    async getFilms(category)
    {
        category = (category) ? category : this.categories[0];

        // if (category !== this.state.category && !this.state.loading) {
        if (this.state.fetched <= 2) {

            try {
                const data = await AxiosApi.getMoviesByCategory(category);
                this.setState({
                    category: category,
                    fetched: 2,
                    films: data.results,
                    error: '',
                });
            } catch {
                this.setState({
                    category: category,
                    fetched: 2,
                    error: 'Fail fetching movies',
                });
            }
        } /**/
    }
}

export default App;
