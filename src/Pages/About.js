import React, { useContext } from "react";

import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Head from "../Components/Head";
import Loader from "../Components/Loader/Loader";
import { HouseContext } from '../Context'

export default function About({ location }) {

  // context
  const contextData = useContext(HouseContext);
  const { aboutHero } = contextData;

  return (
    <div className="about">
      {/* preloader used for every path change  */}
      <Loader name={location.pathname} />
      <Navbar />
      <Hero hero={aboutHero}>
        <div className="container about-container">

          <Head title="about us" />
          <p className="about-description">
            <span className="highlyt">Housee</span> established in 2019 has grown
            from a small startup to one of the world's leading digital travel
            companies.
            <br />
            <br />
            <span className="highlyt">Housee's</span> mission is to make it easier
            for everyone to experience the world and make living pleasurable and
            relaxing.
            <br />
            <br />
            We provide world class Houses with world class services to travelers around world.
            <br />
            <br />
            <span className="highlyt">Housee</span> seamlessly connects millions
            of travellers with memorable experiences, a range of transport options
            and incredible places to stay from homes to hotels and much more.
            <br />
            <br />
            No matter where you want to go or what you want to do,
            <br />
            <span className="highlyt"> Housee</span> makes it easy and backs it
            all up with 24/7 customer support.
          </p>
        </div>
      </Hero>
    </div>
  );
}
