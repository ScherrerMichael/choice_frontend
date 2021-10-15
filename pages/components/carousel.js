import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class MyCarousel extends Component {
    render() {
        return (
            <Carousel
                autoPlay={false}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight={false}
            >
                <div>
                    <div className="blurb review">
                        <p>
                        Choice is the perfect corner store/take out place. Great selection of beer from PBR to local brews, including growler fills and pints. Also has your needs for ice, wine, chips, and staples like eggs or milk covered.
                        The teriyaki is very solid, the KFC is good, and the Choice burger is actually one of my favorites in the area. My veg friend enjoys the yakisoba.
                        It is really a great neighborhood spot and their wizard logo excellent.
                        </p>

                    </div>
                    <p className="legend">James B. ( 2020 Yelp)</p>
                </div>
                <div>
                    <div className="blurb review">
                        <p>
                        Please don't be fooled by the name of this place. Their beer and fried chicken is absolutely amazing. Korean family owns this place and the Mom who does the cooking is clearly the secret weapon. Come for a pint and be sure to order food. Wow.
                        </p>
                    </div>
                    <p className="legend">Martin L. (2020 Yelp)</p>
                </div>
                <div>
                    <div className="blurb review">
                        <p>
                        This place has the cheapest, good quality, regular old cheese burger with fries I have found in Seattle. The owners are really nice and give my dog Charlie teriyaki chicken if they seem him. Sometimes I buy six-packs of local craft beers here.
                        </p>
                    </div>
                    <p className="legend">Eliza R. (2021 Yelp)</p>
                </div>
            </Carousel>
        );
    }
};

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>