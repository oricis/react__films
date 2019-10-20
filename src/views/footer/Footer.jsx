import './footer.scss';
import React, { Component } from 'react';

class Footer extends Component
{

    render()
    {

        return(
            <footer className="App-footer">
                <p>Moisés Alcocer, 2019 - GeekHubs Academy</p>
                <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            </footer>
        )
    }
}

export default Footer;
