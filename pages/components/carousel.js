import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class MyCarousel extends Component {
    render() {
        return (
            <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            dynamicHeight={false}
            >
                <div>
                    <img src="/Teriyaki1.jpg"/>
                    <p className="legend">Chicken Teriyaki Courtesy of Ellery D. from Yelp</p>
                </div>
                <div>
                    <img src="/Teriyaki1.jpg"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/Teriyaki1.jpg"/>
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