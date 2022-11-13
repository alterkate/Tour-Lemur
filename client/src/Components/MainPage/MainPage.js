import React from 'react';
import FilterMain from './FilterMain/FilterMain';
import Slider from './Slider/Slider';
import './mainPage.css';
import About from './About/About';
import PopularTrips from './PopularTrips/PopularTrips';

function MainPage() {
  return (
    <div className="mainpage">
      <Slider />
      {/* <FilterMain /> */}
      <About />
      <PopularTrips />
    </div>
  );
}

export default MainPage;
