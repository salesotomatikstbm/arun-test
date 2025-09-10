import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage/HomePage'
import Historypage from '../Histroy/Histroy';
import HistorySingle from '../../components/All CMS Page/HistorySingle';
import Tamilnadupage from '../Tamilnadu/Tamilnadu';
import TamilnaduSingle from '../../components/All CMS Page/TamilnaduSingle';
import Indiapage from '../India/India';
import IndiaSingle from '../../components/All CMS Page/IndiaSingle';
import Worldpage from '../World/World';
import WorldSingle from '../../components/All CMS Page/WorldSingle';
import Cinemapage from '../Cinema/Cinema';
import CinemaSingle from '../../components/All CMS Page/CinemaSingle';
import Jobpage from '../Job/Job';
import JobSingle from '../../components/All CMS Page/JobSingle';
import Youtubepage from '../Youtube/Youtube';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path='history' element={<Historypage />} />
          <Route path="/history/:slug" element={<HistorySingle />} />
          <Route path='tamilnadu' element={<Tamilnadupage />} />
          <Route path="/tamilnadu/:slug" element={<TamilnaduSingle />} />
 <Route path='india' element={<Indiapage />} />
 <Route path="/india/:slug" element={<IndiaSingle />} />
 <Route path='world' element={<Worldpage />} />
 <Route path="/world/:slug" element={<WorldSingle />} />
 <Route path='cinema' element={<Cinemapage />} />
 <Route path="/cinema/:slug" element={<CinemaSingle />} />
  <Route path='job' element={<Jobpage />} />
 <Route path="/job/:slug" element={<JobSingle />} />

  <Route path='youtube' element={<Youtubepage />} />



          {/* 
          <Route path="hero-blog-single/:slug" element={<HeroBlogSingle />} />
          <Route path="breaking-single/:slug" element={<BreakingSingle />} />
          <Route path="highlight-single/:slug" element={<HighlightSingle />} />
          <Route path="sponsor-single/:slug" element={<SponsoredSingle />} />
          <Route path="features-single/:slug" element={<FeaturesSingle />} />
          <Route path="video-single/:slug" element={<VideoNewsSingle />} />
          <Route path="home2" element={<HomePage2 />} />
          <Route path="home3" element={<HomePage3 />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='lifestyle' element={<LifeStylePage />} />
          <Route path='foods' element={<FoodBlogPage />} />
          <Route path='business' element={<BusinessBlogPage />} />
          <Route path='travels' element={<TravelBlogPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path='product-single/:id' element={<ProductSinglePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='order_received' element={<OrderRecived />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
