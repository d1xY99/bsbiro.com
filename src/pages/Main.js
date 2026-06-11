/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import {
  Services, Portfolios, Advantages, Recenzije,
} from 'json/landingPageData';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Particles3D from 'parts/Particles3D';
import Service from 'parts/Service';
import Advantage from 'parts/Advantage';
import Testimonial from 'parts/Testimonial';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <div className="relative overflow-hidden">
          <Particles3D className="fixed inset-0 z-0 pointer-events-none" />
          <div className="relative z-10">
            <Hero />
            <Service data={Services} />
            <Advantage data={Advantages} />
            <Testimonial data={Recenzije} />
            <Discuss />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
