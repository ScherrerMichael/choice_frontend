import Head from 'next/head'
import Link from 'next/link'
import Footer from './components/footer'
import Header from './components/header'
import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import MapContainer from './components/map';

export default function Home({ data }) {
  return (
    <div className="container">
      <Header />
      <div className="banner">
        banner
      </div>
        <div>{process.env.API_ROUTE + "wadwdawd"}</div>
      <div className="landing-wrapper">
        <div className="landing-left">landing left</div>
        <div className="landing-right">
          <CarouselProvider
            className="carosel"
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            isPlaying={true}
            totalSlides={3}
          >
            <Slider className="carosel-slider">
              <Slide index={0}>I am the first Slide.</Slide>
              <Slide index={1}>I am the second Slide.</Slide>
              <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
          <div>
          {/* <MapContainer/> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
