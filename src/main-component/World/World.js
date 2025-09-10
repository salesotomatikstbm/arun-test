import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle.js'
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import World from '../../components/All CMS Page/World.js';

const Worldpage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'உலகம்'} pagesub={'உலகம்'}/> 
         <World />
           
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Worldpage;

