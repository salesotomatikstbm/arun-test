import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle.js'
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import Job from '../../components/All CMS Page/Job.js';

const Jobpage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'தொழில்'} pagesub={'தொழில்'}/> 
         <Job />
           
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Jobpage;

