import './image-bar.scss';
import React, { Component } from 'react';
import * as Images from './images.jsx';

class ImageBar extends Component
{

    render()
    {

        return (
            <div className="images-bar">
                <div className="masking-box gradient-to-left">
                    <img src={Images.IMG1} alt="" />
                    <img src={Images.IMG2} alt="" />
                    <img src={Images.IMG3} alt="" />
                    <img src={Images.IMG4} alt="" />
                    <img src={Images.IMG5} alt="" />
                </div>
            </div>
        );
    }
}

export default ImageBar;
