import Link from 'next/link'
import Footer from './components/footer'
import Header from './components/header'
import React, { Component } from 'react';
import MapContainer from './components/map';
import Carousel from './components/carousel'

export default function Home({ data }) {
  return (
    <div className="container">
      <Header />
      <div className="landing-wrapper">
        <div className="landing-left">
          <div className="section left">
            <h2>Delicious Food & Craft Beer</h2>
            <p className="description">Hungry? Come try our signature teriyaki, and combination meals. Online delivery, and phone order pick-up available.
            </p>
          </div>
        </div>
        <img className="logo-landing" src="/logo.png" />
        <div className="button-menu">
          <Link
            href="menu"
          >Menu</Link>
        </div>
        <div className="store-hours">
          <div className="schedule-title">Store Hours</div>
          <div className="schedule">
            <ScheduleItem day="Monday - Thursday" time="7a - 12a" />
            <ScheduleItem day="Friday" time="7a - 1p" />
            <ScheduleItem day="Saturday" time="8a - 1a" />
            <ScheduleItem day="Sunday" time="8a - 12a" />
          </div>
        </div>
        <div className="rest-hours">
          <div className="schedule-title">
            Restaurant Hours
          </div>
          <div className="schedule">
            <ScheduleItem day="Monday - Thursday" time="8a - 11p" />
            <ScheduleItem day="Friday - Saturday" time="8a - 12a" />
            <ScheduleItem day="Sunday" time="8a - 11p" />
          </div>
        </div>
      </div>
      {/* <Carousel/> */}
      <div className="location-wrapper">
        <div className="map">
          <MapContainer />
        </div>
        <div className="right">
          <h2 className="section-title">Grab And Go / Sip And Relax</h2>
          <p className="blurb">Pick up an espresso in the morning before work, or do some after-work unwinding by trying out a new locally brewed beer. Or Both.The Choice is yours in Ballard. </p>
          <p className="blurb">(We also have a convience store for everything else in between.)</p>
          <p className="blurb">
            Large selection of drinks from wine, craft beer from local breweries, and kegs to order (kegs must be ordered on or before tuesday).
          </p>
          <h3 className="schedule-title">Location</h3>
          <p className="blurb">6415 8th Ave NW, Seattle, WA 98107</p>
        </div>
      </div>
      <div className="events-wrapper">
        <div className="left">
          <h2 className="section-title">
            Invested in the Community
          </h2>
          <p className="blurb">
            Stay tuned for local events such as: concerts, wine tastings, and block parties!
          </p>
        </div>
        <div className="right">
          <h2 className="section-title">See what others have to say</h2>
          <div className="carousel-wrapper">
            <Carousel />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

class ScheduleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: String,
      time: String,
    }
  }
  render() {
    const {
      day,
      time,
    } = this.props
    return (
      <>
        <div className="day">{day}:
          <div className="time">{time}</div>
        </div>
      </>
    );
  }
}