import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner />
      <DisplayProducts />
      <AboutUs />
      <Testimonial />
    </div>
  );
};

export default Home;