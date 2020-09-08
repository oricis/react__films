import './header.scss';
import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import ImageBar from '../../components/image-bar/ImageBar';

class Header extends Component
{

    render()
    {

        return(
            <header className="App-header">
                <div className="App-title">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>The React Films project</h1>
                </div>

                <ImageBar></ImageBar>
            </header>
        )
    }
}

export default Header;
