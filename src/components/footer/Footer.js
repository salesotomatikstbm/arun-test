import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo2.png'
import ins1 from '../../images/ft-icon/1.png'
import ins2 from '../../images/ft-icon/2.png'
import ins3 from '../../images/ft-icon/3.png'
import ins4 from '../../images/ft-icon/4.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = () => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        {/* About */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="vithalgal" />
                                </div>
                                <p>
                                    <strong>விதைகள் இயக்கம்</strong> – சமூக நீதி, கல்வி, பண்பாடு மற்றும் 
                                    சமூக முன்னேற்றத்தை முன்னெடுத்து செல்லும் இயக்கம். 
                                    தமிழர் ஒற்றுமை மற்றும் நம் பாரம்பரியத்தை காக்கும் பணி.
                                </p>
                            </div>
                        </div>

                        {/* Important Links */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>முக்கிய இணைப்புகள்</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/home">முகப்பு</Link></li>
                                    <li><Link onClick={ClickHandler} to="/history">வரலாறு</Link></li>
                                    <li><Link onClick={ClickHandler} to="/tamilnadu">தமிழ்நாடு</Link></li>
                                    <li><Link onClick={ClickHandler} to="/india">இந்தியா</Link></li>
                                    <li><Link onClick={ClickHandler} to="/world">உலகம்</Link></li>
                                    <li><Link onClick={ClickHandler} to="/cinema">சினிமா</Link></li>
                                    <li><Link onClick={ClickHandler} to="/job">தொழில்</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Browse by Tag */}
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget tag-widget">
                                <div className="widget-title">
                                    <h3>பிரிவுகள்</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/tamilnadu">தமிழ்நாடு</Link></li>
                                    <li><Link onClick={ClickHandler} to="/india">இந்தியா</Link></li>
                                    <li><Link onClick={ClickHandler} to="/world">உலகம்</Link></li>
                                    <li><Link onClick={ClickHandler} to="/cinema">சினிமா</Link></li>
                                    <li><Link onClick={ClickHandler} to="/job">தொழில்</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget social-widget">
                                <div className="widget-title">
                                    <h3>சமூக ஊடகம்</h3>
                                </div>
                                <ul>
                                    <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i><img src={ins1} alt="" /></i> Facebook</a></li>
                                    <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i><img src={ins2} alt="" /></i> Twitter</a></li>
                                    <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><i><img src={ins3} alt="" /></i> Instagram</a></li>
                                    <li><a href="https://youtube.com" target="_blank" rel="noreferrer"><i><img src={ins4} alt="" /></i> YouTube</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower Footer */}
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">
                                Copyright &copy; {new Date().getFullYear()} 
                                <span> விதைகள் இயக்கம்</span>. அனைத்தும் உரிமையுடையவை.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
