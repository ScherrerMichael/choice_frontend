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
                I was craving Korean chicken so I wanted to see what Seattle had to offer (I haven't lived here long).
                I checked out Yelp reviews & photos, & they looked very good! I also checked their website to see the menu.
                I've come here twice. Ordered Korean fried chicken both times. It's very good. A bit soggy though, I think that's because it steams up in the to-go box. I got the sweet n spicy. It has a nice kick. I like that it's not too sweet & even had a bit of tang, but I wish it were more saucy. Nonetheless, definitely worth coming back for.
              </p>
              <div className="card-graphic">
                Gina B. - Yelp
              </div>
            </div>
            <div className="card-review-2">
              <p className="card-text">
                I was craving Korean chicken so I wanted to see what Seattle had to offer (I haven't lived here long).
                I checked out Yelp reviews & photos, & they looked very good! I also checked their website to see the menu.
                I've come here twice. Ordered Korean fried chicken both times. It's very good. A bit soggy though, I think that's because it steams up in the to-go box. I got the sweet n spicy. It has a nice kick. I like that it's not too sweet & even had a bit of tang, but I wish it were more saucy. Nonetheless, definitely worth coming back for.
              </p>
              <div className="card-graphic">
                Gina B. - Yelp
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
              Large selection of drinks from wine, craft beer from local breweries, and kegs*.
            </p>
            <p className="note">
              *kegs must be ordered on or before tuesday for the week.
            </p>
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