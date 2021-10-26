import Link from 'next/link'
import Footer from './components/footer'
import Header from './components/header'
import React, { Component } from 'react';
import MapContainer from './components/map';
import Carousel from './components/carousel'
import ScheduleItem from './components/scheduleItem';

export default function Home({ data }) {
  return (
    <div className="container">
      <Header />
      <div className="landing-wrapper">
        <div className="landing-left">
          <h2>Delicious Food & Craft Beer</h2>
          <p className="blurb">Hungry? Come try our signature teriyaki and combination meals. Online delivery, and phone order pick-up available.
          </p>
        </div>
          <Link href="/menu">
        <div className="button-menu">
          Menu
        </div>
          </Link>
          <Link href="https://www.ubereats.com/store/choice-teriyaki/mMYRIOt6TvygZ585XkT8qQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkNob2ljZSUyMERlbGklMjAlMjYlMjBHcm9jZXJ5JTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyNDVjYzQzMWYtMmEwNC1iZjU1LTU2MmUtZjZiMWM2ODJjZTc4JTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMnViZXJfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E0Ny42NzU4MDY3JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTEyMi4zNjYzNDMzJTdE">
        <div className="button-grubhub">
        UberEats
        </div>
          </Link>
        <img className="logo-landing" src="/logo.png" />
        <div className="store-hours">
          <div className="schedule-title">Store Hours</div>
          <div className="schedule">
            <ScheduleItem day="Monday - Thursday" time="8a - 11p" />
            <ScheduleItem day="Friday - Saturday" time="8a - 12p" />
            <ScheduleItem day="Sunday" time="8a - 11p" />
          </div>
        </div>
        <div className="rest-hours">
          <div className="schedule-title">
            Restaurant Hours
          </div>
          <div className="schedule">
            <ScheduleItem day="Monday - Saturday" time="11a - 8:30p" />
            <ScheduleItem day="Sunday" time="11:30a - 7:30p" />
          </div>
        </div>
        <div className="phone">
          <div className="schedule-title">Telephone</div>
          <p className="phone-number">(206)-789-0211</p>
        </div>
        <div className="location">
          <div className="schedule-title">Location</div>
          <p className="location-blurb">6415 8th Ave NW, Seattle, WA 98107</p>
        </div>
        <div className="location-wrapper">
          <div className="map">
            <MapContainer />
          </div>
          <div className="right">
            <h2 className="section-title m-middle">Grab And Go / Sip And Relax</h2>
            <p className="blurb">Pick up an espresso in the morning before work, or do some after-work unwinding and try a new local beer. Or Both! The Choice is yours in Ballard. </p>
            <p className="blurb">(We also have a convience store for everything else in between.)</p>
            <p className="blurb">We sell kegs too! must be ordered on or before Tuesday.</p>
          </div>
        </div>
        <div className="review-wrapper">
          <div className="right m-reviews">
            <h2 className="section-title m-middle">See what others have to say</h2>
            <Carousel />
          </div>
        </div>
      </div>
      {/* <Carousel/> */}
      <Footer />
    </div>
  )
}
