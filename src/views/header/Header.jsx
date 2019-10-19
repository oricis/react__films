import './header.scss';
import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';

class Header extends Component
{

    render()
    {

        return(
            <header className="App-header">
                <div className="App-title">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>The React Films proyect</h1>
                </div>

                {
                    (this.props.pageSubtitle)
                        ? <h3>this.props.pageSubtitle</h3>
                        : ''
                }

                <div className="images-bar">TODO: FilmsBar with images here</div>
            </header>
        )
    }
}

export default Header;
