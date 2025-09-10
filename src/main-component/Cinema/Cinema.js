import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle.js'
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import Cinema from '../../components/All CMS Page/Cinema.js';

const Cinemapage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'சினிமா'} pagesub={'சினிமா'}/> 
         <Cinema />
           
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Cinemapage;

