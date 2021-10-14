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
      <div className="banner">
        <img
          className="logo-landing"
          src="/logo.png"
          alt="Logo of Choice Deli"
        ></img>
        <h1 className="banner-title-1">
          Restaurant - Bar - Grocery
        </h1>
      </div>
      <div className="landing-wrapper">
        <div className="landing-left">
          <div className="section">
            <h2>Delicious Food & Craft Beer</h2>
            <p className="description">Hungry? Come try our signature teriyaki, and combination meals. Online delivery, and phone order pick-up available.
            </p>
            <p className="description">
              Large selection of drinks from wine, craft beer from local breweries, and kegs to order (kegs must be ordered on or before tuesday).
            </p>
            <div className="button">
              <Link
                href="menu"
              >Menu</Link>
            </div>
          </div>
          <div className="gallery">
            <img src="/choice_5.jpg"></img>
          </div>
        </div>
        <div className="map-wrapper">
          <div className="map">
            <MapContainer />
          </div>
          <div>
            <div className="phone">
              <h3>
                Phone:
              </h3>
              (206)-789-0211
            </div>

            <div className="address">
              <h3>
                Address:
              </h3>
              <a href="https://goo.gl/maps/5madDQdLQhr868rP7">
                6415 8th Ave NW, Seattle, WA 98107
              </a>
            </div>
          </div>
        </div>
        <div className="schedule-wrapper" id="to-schedule">
          <div className="store-hours">
            <div className="schedule-title">Store Hours</div>
          <div className="schedule">
            <ScheduleItem day="Mon - Th" time="7a - 12a" />
            <ScheduleItem day="Fri" time="7a - 1p" />
            <ScheduleItem day="Sat" time="8a - 1a" />
            <ScheduleItem day="Sun" time="8a - 12a" />
          </div>
          </div>
          <div className="rest-hours">
            <div className="schedule-title">
              Restaurant Hours
              </div>
          <div className="schedule">
            <ScheduleItem day="Mon - Th" time="8a - 11p" />
            <ScheduleItem day="Fri - Sat" time="8a - 12a" />
            <ScheduleItem day="Sun" time="8a - 11p" />
          </div>
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
        <div className="day">{day}</div>
        <div className="time">{time}</div>
      </>
    );
  }
}