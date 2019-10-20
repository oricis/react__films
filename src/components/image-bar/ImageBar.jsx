import './image-bar.scss';
import React, { Component } from 'react';
import img1 from '../../assets/images/2IUpoKSP64r6rp2vBo0Fdk8a1UU.jpg';
import img2 from '../../assets/images/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg';
import img3 from '../../assets/images/skvI4rYFrKXS73BJxWGH54Omlvv.jpg';
import img4 from '../../assets/images/uLXK1LQM28XovWHPao3ViTeggXA.jpg';
import img5 from '../../assets/images/xOcuDnxTTqNT2CuFNy5VVc67tG4.jpg';

class ImageBar extends Component
{

    render()
    {

        return (
            <div className="images-bar">
                <div className="masking-box gradient-to-left">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
            </div>
        );
    }
}

export default ImageBar;
