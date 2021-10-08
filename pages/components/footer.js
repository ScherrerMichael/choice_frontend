import React, { Component, createRef } from 'react';
import Link from 'next/link'
import fblogo from "../../public/f_logo_RGB-Blue_58.png"
import yelplogo from "../../public/yelp_favicon.png"


class Footer extends Component {
    render() {
        return (<>
            <div className="footer">
                <div className="footer-left">
                    Choice Deli 2021
                </div>
                <div className="footer-middle">
                    <div className="footer-address">
                        6415 8th Ave NW, Seattle, WA 98107
                    </div>
                    <div className="footer-phone">
                        Tel: (206)-789-0211
                    </div>
                </div>
                <div className="footer-right">
                    <div
                        className="brand-logo"
                    >
                        <Link
                            href="https://www.facebook.com/ballardchoice/"
                        >
                            <a>
                                <img
                                    width={17}
                                    height={17}
                                    src="/f_logo_RGB-Blue_58.png"
                                ></img>
                            </a>
                        </Link>
                        <Link
                            href="https://www.yelp.com/biz/choice-deli-and-grocery-seattle"
                        >
                            <a>
                                <img
                                    width={17}
                                    height={17}
                                    src="/yelp_favicon.png"
                                ></img>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
        );
    }
}



export default Footer;