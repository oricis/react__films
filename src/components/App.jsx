import '../assets/styles/App.scss';
import React from 'react';
import FilmList from "./film-list/FilmList";
import logo from '../assets/images/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h3>React Films</h3>
      </header>


    </div>
  );
}

export default App;
