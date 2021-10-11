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
            <h2>Delicious Food</h2>
            <p className="description">Hungry? Come try our signature teriyaki, and combination meals. Online delivery, and phone order pick-up available too.
            </p>
            <div className="card-review-1">
              <p className="card-text">
                "The teriyaki is very solid, the KFC is good, and the Choice burger is actually one of my favorites in the area. My veg friend enjoys the yakisoba."
              </p>
              <div className="card-graphic">
                James B. - Yelp
                <div className="triangle-tilted">
                </div>
              </div>
            </div>
            <div className="button">
              <Link
                href="menu"
              >Menu</Link>
            </div>
          </div>
          <div className="section">
            <h2>Variety Drinks</h2>
            <p className="description">
              Large selection of drinks from wine, craft beer from local breweries, and kegs to order (kegs must be ordered on or before tuesday).
            </p>
            <div className="card-review-2">
              <p className="card-text">
                "Their beer and fried chicken is absolutely amazing. Korean family owns this place and the Mom who does the cooking is clearly the secret weapon. Come for a pint and be sure to order food. Wow."
              </p>
              <div className="card-graphic">
                Martin L - Yelp
                <div className="triangle-tilted">
                </div>
              </div>
            </div>
            {/* <p className="note">
              *kegs must be ordered on or before tuesday for the week.
            </p> */}
          </div>
          <div className="section">
            <h2>Many More</h2>
            <p className="description">
              We have a convience store for all your daily needs. Also, stay tuned for special events such as block parties, and wine tastings!
            </p>
            <div className="button">
              <Link
                href="menu"
              >Events</Link>
            </div>
          </div>
        </div>
        <div className="carousel-wrapper">
          <Carousel />
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