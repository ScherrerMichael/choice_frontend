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
        <h1 className="banner-title-wrapper">choice deli</h1>
      </div>
      <div className="landing-wrapper">
        <div className="landing-left">landing left</div>
        <div className="landing-right">
            <Carousel />
        </div>
        <div className="map-wrapper">
          <div className="map">
            <MapContainer />
          </div>
          <div className="location">
            location
          </div>
        </div>
        <div className="schedule-wrapper">
          <div className="schedule">
            <ScheduleItem day="Mon - Th" time="7am - 12am"/>
            <ScheduleItem day="Fri" time="7am - 1pm"/>
            <ScheduleItem day="Sat" time="8am - 1am"/>
            <ScheduleItem day="Sun" time="8am - 12am"/>
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