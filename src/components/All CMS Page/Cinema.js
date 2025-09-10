import React from 'react';
import { Link } from 'react-router-dom';
import useHighlightsNews from "../../hooks/useCinema";  // Custom hook

const Cinema = (props) => {
    const { highlights, loading, error } = useHighlightsNews();  // Fetch highlights from CMS

    const ClickHandler = () => {
        window.scrollTo(10, 0); // Scroll to top when clicking a link
    };

    if (loading) return <p>ஏற்றுகிறேன்...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="wpo-blog-highlights-section mt-5">
            <div className="container">
                <div className="wpo-section-title">
                    <h2>சினிமா தொடர்பான செய்திகள்</h2>
                </div>
                <div className="row">
                    {/* Main News Section */}
                    <div className={`col col-lg-8 col-12 ${props.colClass}`}>
                        <div className="wpo-blog-highlights-wrap">
                            <div className="wpo-blog-items">
                                <div className="row">
                                    {highlights.slice(0, 6).map((highlight, bitem) => (
                                        <HistoryCard 
                                            key={bitem} 
                                            highlight={highlight} 
                                            ClickHandler={ClickHandler} 
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className={`col col-lg-4 col-12 ${props.hideClass}`}>
                        <div className="blog-sidebar">
                            {/* Post Categories Section */}
                            <div className="widget category-widget">
                                <h3>விரைவான இணைப்பு</h3>
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

                            {/* Recent Posts Section */}
                            <div className="widget recent-post-widget">
                                <h3>தொடர்புடைய பதிவுகள்</h3>
                                {highlights.slice(0, 5).map((highlight, bitem) => (
                                    <div className="posts" key={bitem}>
                                        <div className="post d-flex mb-3">
                                            <div className="img-holder me-3">
                                                <img 
                                                    src={highlight.screens} 
                                                    alt={highlight.title} 
                                                    className="img-fluid rounded"
                                                    style={{ width: "80px", height: "60px", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div className="details">
                                                <span className="date d-block text-muted small">
                                                    {highlight.dateFormatted}
                                                </span>
                                                <h5 className="mb-0">
                                                    <Link
                                                        onClick={ClickHandler}
                                                        to={`/cinema/${highlight.slug}`}
                                                        className="text-decoration-none"
                                                    >
                                                        {highlight.title}
                                                    </Link>
                                                </h5>
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
};

/* ✅ Card Component with Clean 2-line Truncated Description */
const HistoryCard = ({ highlight, ClickHandler }) => {
    // Limit description to ~20 words for 2-line preview
    const shortDescription = highlight.description
        ? highlight.description.split(" ").slice(0, 20).join(" ")
        : "";

    return (
        <div className="col col-lg-6 col-md-6 col-12">
            <div className="wpo-blog-item">
                {/* Image */}
                <div className="wpo-blog-img">
                    <img 
                        src={highlight.screens} 
                        alt={highlight.title} 
                        className="img-fluid rounded"
                    />
                </div>

                {/* Content */}
                <div className="wpo-blog-content">
                    <h2>
                        <Link
                            onClick={ClickHandler}
                            to={`/cinema/${highlight.slug}`}
                        >
                            {highlight.title}
                        </Link>
                    </h2>
                    <ul>
                        <li>
                            <img 
                                src={highlight.avatar} 
                                alt={highlight.author || "Author"} 
                                className="rounded-circle" 
                                style={{ width: "30px", height: "30px", objectFit: "cover" }}
                            />
                        </li>
                        <li>By {highlight.author || "Admin"}</li>
                        <li>{highlight.dateFormatted}</li>
                    </ul>

                    {/* Description (Truncated to 2 lines) */}
                    <p style={{ textAlign: "justify" }}>
                        {shortDescription}...
                    </p>

                    {/* View More Button → navigates to full slug page */}
                    <Link
                        onClick={ClickHandler}
                        to={`/cinema/${highlight.slug}`}
                        className="btn btn-sm btn-primary mt-2"
                    >
                        முழுமையாக காண்க
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default Cinema;
