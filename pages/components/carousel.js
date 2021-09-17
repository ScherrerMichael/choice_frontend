import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Teriyaki1 from '../../public/Teriyaki1.jpg'

export default class MyCarousel extends Component {
    render() {
        return (
            <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}>
                <div>
                    <Image src={Teriyaki1}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <Image src={Teriyaki1}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <Image src={Teriyaki1}/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>