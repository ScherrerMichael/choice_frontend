import Link from 'next/link'
import Image from 'next/image'
import Footer from './components/footer'
import Header from './components/header'
import React from 'react';
import MapContainer from './components/map';
import Teriyaki1 from '../public/Teriyaki1.jpg'
import Teriyaki2 from '../public/Teriyaki2.jpg'
import Teriyaki3 from '../public/Teriyaki3.jpg'

export default function Home({ data }) {
  return (
    <div className="container">
      <Header />
      <div className="banner">
        banner
      </div>
      <div className="landing-wrapper">
        <div className="landing-left">landing left</div>
        <div className="landing-right">
          <div className="carosel-wrapper">
            images
          </div>
        </div>
          <div className="map-wrapper">
            <div>Location</div>
            <MapContainer />
          </div>
          <div className="schedule-wrapper">
            schedule
          </div>
      </div>
      <Footer />
    </div>
  )
}
