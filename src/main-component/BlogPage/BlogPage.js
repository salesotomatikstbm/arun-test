import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import History from '../../components/All CMS Page/History.js';

const BlogPage =() => {
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
export default BlogPage;

