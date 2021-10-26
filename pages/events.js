import React, { Component } from 'react';
import Footer from './components/footer'
import Header from './components/header'

export default function Menu({ data }) {
    return (
        <>
            <div className="container">
            <Header />
            <div className="events-wrapper">
                {/* <div className="events">
                    hello
                </div> */}
            </div>
            <Footer />
            </div>
        </>
    );
}