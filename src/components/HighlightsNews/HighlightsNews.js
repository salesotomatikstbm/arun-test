import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useHighlightsNews from "../../hooks/useHighlightsNews";  // Importing the custom hook

const HighlightsNews = (props) => {
    const { highlights, loading, error } = useHighlightsNews();  // Fetch highlights from CMS

    const ClickHandler = () => {
        window.scrollTo(10, 0); // Scroll to top when clicking a link
    }

    const [expanded, setExpanded] = useState({}); // State to track which description is expanded

    const toggleDescription = (id) => {
        setExpanded(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    if (loading) return <p>ஏற்றுகிறேன்...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="wpo-blog-highlights-section">
            <div className="container">
                <div className="wpo-section-title">
                    <h2>இன்றைய முக்கிய ஹைலைட்கள்</h2>
                </div>
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.colClass}`}>
                        <div className="wpo-blog-highlights-wrap">
                            <div className="wpo-blog-items">
                                <div className="row">
                                    {highlights.slice(0, 6).map((highlight, bitem) => (
                                        <div className="col col-lg-6 col-md-6 col-12" key={bitem}>
                                            <div className="wpo-blog-item">
                                                <div className="wpo-blog-img">
                                                    <img src={highlight.screens} alt="" />
                                                </div>
                                                <div className="wpo-blog-content">
                                                    <h2><Link onClick={ClickHandler} to={`/highlight-single/${highlight.slug}`}>{highlight.title}</Link></h2>
                                                    <ul>
                                                        <li><img src={highlight.avatar} alt="" /></li>
                                                        <li>By <Link onClick={ClickHandler} to={`/highlight-single/${highlight.slug}`}>{highlight.author || 'Admin'}</Link></li> {/* Fetch author dynamically */}
                                                        <li>{highlight.dateFormatted}</li>
                                                    </ul>
                                                    
                                                    {/* Description */}
                                                    <p className="justified-text">
                                                        {expanded[highlight.id] ? highlight.description : `${highlight.description.split("\n").slice(0, 3).join("\n")}`}
                                                    </p>

                                                    {/* Toggle Button */}
                                                    <button 
                                                        onClick={() => toggleDescription(highlight.id)} 
                                                        className="view-more-btn"
                                                    >
                                                        {expanded[highlight.id] ? "மூடும்" : "முழுமையாக காண்க"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col col-lg-4 col-12 ${props.hideClass}`}>
                        <div className="blog-sidebar">
                            {/* Post Categories Section */}
                            <div className="widget category-widget">
                                <h3>இடுகை வகைகள்</h3>
                                <ul>
                                  <li><Link onClick={ClickHandler} to="/home">முகப்பு</Link></li>
                                                                     <li><Link onClick={ClickHandler} to="/blog">வரலாறு</Link></li>
                                                                     <li><Link onClick={ClickHandler} to="/foods">தமிழ்நாடு</Link></li>
                                                                     <li><Link onClick={ClickHandler} to="/india">இந்தியா</Link></li>
                                                                     <li><Link onClick={ClickHandler} to="/lifestyle">உலகம்</Link></li>
                                                                     <li><Link onClick={ClickHandler} to="/cinema">சினிமா</Link></li>
                                                                     <li><Link onClick={ClickHandler} to="/jobs">தொழில்</Link></li>
                                </ul>
                            </div>

                            {/* Recent Posts Section */}
                            <div className="widget recent-post-widget">
                                <h3>தொடர்புடைய பதிவுகள்</h3>
                                {highlights.slice(0, 5).map((highlight, bitem) => (
                                    <div className="posts" key={bitem}>
                                        <div className="post">
                                            <div className="img-holder">
                                                <img src={highlight.screens} alt="" />
                                            </div>
                                            <div className="details">
                                                <span className="date">{highlight.dateFormatted}</span>
                                                <h4><Link onClick={ClickHandler} to={`/highlight-single/${highlight.slug}`}>{highlight.title}</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HighlightsNews;
