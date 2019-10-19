import '../assets/styles/App.scss';
import React from 'react';
import FilmList from "./film-list/FilmList";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function App()
{
    const data = [];
    const pageSubtitle = '';

    return (
        <div className="App">
            <Header pageSubtitle={pageSubtitle}></Header>
            <FilmList data={data}></FilmList>
            <Footer></Footer>
        </div>
    );
}

export default App;
