import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle.js'
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'

import Tamilnadu from '../../components/All CMS Page/Tamilnadu.js';

const Tamilnadupage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'தமிழ்நாடு'} pagesub={'தமிழ்நாடு'}/> 
           
<Tamilnadu />
           
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Tamilnadupage;

