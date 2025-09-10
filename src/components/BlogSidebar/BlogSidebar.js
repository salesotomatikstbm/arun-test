import React from 'react';
import { Link } from 'react-router-dom'
import about from '../../images/blog/about-widget.jpg'
import Breaking from '../../api/breaking'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">

                {/* About Vithaigal Iyakkam */}
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={about} alt="விதைகள் இயக்கம்" />
                    </div>
                    <h4>விதைகள் இயக்கம்</h4>
                    <p>
                        இளைஞர்களை ஒருங்கிணைத்து சமூக upliftment, கல்வி, 
                        சுற்றுச்சூழல் பாதுகாப்பு மற்றும் கலாச்சார வளர்ச்சிக்காக 
                        செயல்படும் ஒரு இயக்கம்.
                    </p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="ti-facebook"></i></a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="ti-twitter-alt"></i></a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="ti-instagram"></i></a></li>
                            <li><a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="ti-youtube"></i></a></li>
                        </ul>
                    </div>
                    <div className="aw-shape"></div>
                </div>

                {/* Search */}
                <div className="widget search-widget">
                    <h3>தேடல்</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="தேடுங்கள்..." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>

                {/* Categories */}
                <div className="widget category-widget">
                    <h3>வகைகள்</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog">சமூகப்பணி <span>(10)</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">கல்வி <span>(08)</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">சுற்றுச்சூழல் <span>(06)</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">ஆரோக்கியம் <span>(05)</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">கலாச்சாரம் <span>(07)</span></Link></li>
                    </ul>
                </div>

                {/* Recent Posts */}
                <div className="widget recent-post-widget">
                    <h3>சமீபத்திய பதிவுகள்</h3>
                    {Breaking.slice(1, 4).map((blog, bitem) => (
                        <div className="posts" key={bitem}>
                            <div className="post">
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <span className="date">{blog.create_at}</span>
                                    <h4>
                                        <Link onClick={ClickHandler} to={`/breaking-single/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tags */}
                <div className="widget tag-widget">
                    <h3>டேக்கள்</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog">சேவை</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">கல்வி</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">இயற்கை</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">இளைஞர்</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">கலாச்சாரம்</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">சமூகநீதி</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="wpo-contact-widget widget">
                    <h2>நம்முடன் <br /> இணையுங்கள்</h2>
                    <p>
                        விதைகள் இயக்கத்தில் சேர்ந்து சமூக நலத்திற்கும், 
                        கல்விக்கும், சுற்றுச்சூழல் பாதுகாப்பிற்கும் 
                        பங்களியுங்கள்.
                    </p>
                    <Link onClick={ClickHandler} to="/contact">Join Us</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar;
