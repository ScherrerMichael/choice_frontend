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
          <div className="section">
            <h2>Delicious Food & Craft Beer</h2>
            <p className="description">Hungry? Come try our signature teriyaki, and combination meals. Online delivery, and phone order pick-up available.
            </p>
            <p className="description">
              Large selection of drinks from wine, craft beer from local breweries, and kegs to order (kegs must be ordered on or before tuesday).
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
        <MapContainer/>
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