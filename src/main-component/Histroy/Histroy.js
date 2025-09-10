import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle.js'
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import History from '../../components/All CMS Page/History.js';

const Historypage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'வரலாறு'} pagesub={'வரலாறு'}/> 
           
<History />
           
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Historypage;

