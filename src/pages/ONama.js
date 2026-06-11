/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import Informacije from 'parts/Informacije';
import Particles3D from 'parts/Particles3D';
import Footer from 'parts/Footer';


export default class TeamPage extends Component {
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
            <Informacije />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
