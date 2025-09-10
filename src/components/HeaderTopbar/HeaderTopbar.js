import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTopbar = () => {
    return (
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 col-md-9 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li className="update"><span>புதிய செய்தி</span></li>
                                <li>மீம் பங்குகளுக்கு எதிராக பந்தயம் செய்வது பெரிய இழப்பை ஏற்படுத்தலாம்</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-3 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                <li><Link to="/"><i className="ti-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;
