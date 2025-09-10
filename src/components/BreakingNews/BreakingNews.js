import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useBreakingNews from "../../hooks/useBreakingNews";  // Import the custom hook

const ClickHandler = () => {
    window.scrollTo(10, 0); // Scroll to top when clicking a link
};

const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const BreakingNews = () => {
    const { breakingNews, loading, error } = useBreakingNews();  // Fetch breaking news from Contentful

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;  // Show the error message if fetching fails

    return (
        <div className="wpo-breacking-news section-padding">
            <div className="container">
                <div className="row">
                    <div className="b-title"><span>Breaking News</span></div>
                    <div className="wpo-breacking-wrap">
                        <Slider {...settings}>
                            {breakingNews.map((news) => (
                                <div className="wpo-breacking-slide" key={news.id}>  {/* Use unique ID */}
                                    <div className="wpo-breacking-item">
                                        <div className="wpo-breacking-img">
                                            <img
                                                src={news.imageUrl || "/placeholder.jpg"}  // Use a placeholder if image is missing
                                                alt={news.title}
                                            />
                                        </div>
                                        <div className="wpo-breacking-text">
                                            <span>{news.dateFormatted}</span>  {/* Formatted date */}
                                            <h3>
                                                <Link onClick={ClickHandler} to={`/breaking-single/${news.id}`}>
                                                    {news.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;
