import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar';
import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from '../../images/logo.png';
import Logo2 from '../../images/logo2.png';

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [rightMenuActive, setrightMenuState] = useState(false);
    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <header id="header" className={props.topbarNone}>
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="navbar-header">
                            <Link onClick={ClickHandler} className="navbar-brand" to="/home">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                        <div className="d-flex justify-content-between w-100">
                            {/* Mobile menu */}
                            <div className="d-lg-none">
                                <MobileMenu />
                            </div>

                            {/* Navbar items */}
                          <div id="navbar" className="collapse navbar-collapse">
    <ul className="nav navbar-nav mb-2 mb-lg-0 d-flex align-items-center flex-nowrap">
        <li><Link onClick={ClickHandler} to="/home">முகப்பு</Link></li>
        <li><Link onClick={ClickHandler} to="/history">வரலாறு</Link></li>
        <li><Link onClick={ClickHandler} to="/tamilnadu">தமிழ்நாடு</Link></li>
        <li><Link onClick={ClickHandler} to="/india">இந்தியா</Link></li>
        <li><Link onClick={ClickHandler} to="/world">உலகம்</Link></li>
        <li><Link onClick={ClickHandler} to="/cinema">சினிமா</Link></li>
        <li><Link onClick={ClickHandler} to="/job">தொழில்</Link></li>
        <li><Link onClick={ClickHandler} to="/youtube">யூடியூப்</Link></li>
    </ul>
</div>


                            {/* Header Right Menu */}
                            <div className="header-right d-flex align-items-center">
                                <div className="header-search-form-wrapper">
                                    <div className="cart-search-contact">
                                        <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                            <form onSubmit={SubmitHandler}>
                                                <div>
                                                    <input type="text" className="form-control" placeholder="தேடுங்கள்..." />
                                                    <button type="submit"><i className="fi flaticon-magnifiying-glass"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>



                                <div className="header-right-menu-wrapper">
                                    <div className="header-right-menu">
                                        <div className="right-menu-toggle-btn" onClick={() => setrightMenuState(!rightMenuActive)}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>

                                        <div className={`header-right-menu-wrap ${rightMenuActive ? "right-menu-active" : ""}`}>
                                            <button className="right-menu-close" onClick={() => setrightMenuState(!rightMenuActive)}>
                                                <i className="ti-close"></i>
                                            </button>
                                            <div className="logo"><img src={Logo2} alt="" /></div>
                                            <div className="header-right-sec">
                                                {/* Social Media Section */}
                                                <div className="widget wpo-social-widget">
                                                    <div className="widget-title">
                                                        <h3>எங்களை பின்தொடருங்கள்</h3>
                                                    </div>
                                                    <ul className="social-links">
                                                        <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="ti-facebook"></i></a></li>
                                                        <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="ti-twitter-alt"></i></a></li>
                                                        <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="ti-instagram"></i></a></li>
                                                        <li><a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="ti-youtube"></i></a></li>
                                                    </ul>
                                                </div>

                                                {/* Contact Section */}
                                                <div className="widget wpo-contact-widget">
                                                    <div className="widget-title">
                                                        <h3>தொடர்பு கொள்ள</h3>
                                                    </div>
                                                    <div className="contact-ft">
                                                        <ul>
                                                         
                                                            <li><i className="fi flaticon-email"></i>example@gmail.com</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
