import Link from 'next/link'
import Image from 'next/image'
import Footer from './components/footer'
import Header from './components/header'
import React, { Component } from 'react';
import MapContainer from './components/map';
import Teriyaki1 from '../public/Teriyaki1.jpg'
import Teriyaki2 from '../public/Teriyaki2.jpg'
import Teriyaki3 from '../public/Teriyaki3.jpg'
import beer from '../public/beer-tap.jpg'
import Carousel from './components/carousel'

export default function Home({ data }) {
  return (
    <div className="container">
      <Header />
      <div className="banner">
        <h1 className="banner-title-wrapper">
        </h1>
      </div>
      <div className="landing-wrapper">
        <div className="landing-left">
          Welcome to Choice Deli!
          CHOICE DELI NOTES

craft beer from local brewerys

friendly staff

kegs (limited): Tuesday is the cutoff to order kegs for the week

add ratings from yelp

no credit card fee

we have atm machine

to-go one-time fee 50 cents

specialty: craft beer, food, convience

link to postmates, uber eats.

order about 10 minutes before closing

special events: block party, wine tasting

(find out how to use the same url or figure something out)
          </div>
        <div className="carousel-wrapper">
          <Carousel />
        </div>
        <div className="map-wrapper">
          <div className="map">
            <MapContainer />
          </div>
          <div>

            <div className="address">
              <h3>
                Address:
              </h3>
              <a href="https://goo.gl/maps/5madDQdLQhr868rP7">
                6415 8th Ave NW, Seattle, WA 98107
              </a>
            </div>

            <div className="phone">
              <h3>
                Phone:
              </h3>
              <a href="tel:+1206-789-0211">
                (206)-789-0211
                </a>
            </div>

          </div>
        </div>
        <div className="schedule-wrapper">
          <div className="schedule">
            <ScheduleItem day="Mon - Th" time="7am - 12am" />
            <ScheduleItem day="Fri" time="7am - 1pm" />
            <ScheduleItem day="Sat" time="8am - 1am" />
            <ScheduleItem day="Sun" time="8am - 12am" />
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