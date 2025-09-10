import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Scrollbar from '../../components/scrollbar/scrollbar';
import BreakingNews from '../../components/BreakingNews/BreakingNews';
import Footer from '../../components/footer/Footer';
import HistorySlider from '../../components/All CMS Page/HistorySlider.js';
import TamilnaduSlider from '../../components/All CMS Page/TamilnaduSlider.js';
import IndiaSlider from '../../components/All CMS Page/IndiaSlider.js';
import WorldSlider from '../../components/All CMS Page/WorldSlider.js';
import CinemaSlider from '../../components/All CMS Page/CinemaSlider.js';
import JobSlider from '../../components/All CMS Page/JobSlider.js';
import YoutubeSlider from '../../components/All CMS Page/YoutubeSlider.js';

const HomePage = () => {
  return (
    <Fragment>
      <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />

      {/* Hero already fetches blogs itself */}
      {/* <Hero /> */}

      <BreakingNews />
      <HistorySlider />
<TamilnaduSlider />
<IndiaSlider />
<WorldSlider />
<CinemaSlider />
<JobSlider />
<YoutubeSlider />


      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage;
