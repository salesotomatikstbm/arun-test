import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle.js'
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import India from '../../components/All CMS Page/India.js';

const Indiapage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'இந்தியா'} pagesub={'இந்தியா'}/> 
         <India />
           
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Indiapage;

