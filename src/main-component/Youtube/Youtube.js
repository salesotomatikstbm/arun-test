import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle.js'
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import Youtube from '../../components/All CMS Page/Youtube.js'

const Youtubepage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Youtube'} pagesub={'Youtube'}/> 
    
           <Youtube />

            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Youtubepage;

