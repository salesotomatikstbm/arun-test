import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import useHighlightsNews from "../../hooks/useJob"; // Custom hook

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JobSlider = () => {
  const { highlights, loading, error } = useHighlightsNews();

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  if (loading) return <p>ஏற்றுகிறேன்...</p>;
  if (error) return <p>{error}</p>;

  // ✅ Slider settings
  const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="wpo-blog-highlights-section mt-5">
      <div className="container">
        <div className="wpo-section-title">
          <h2>தொழில் தொடர்பான செய்திகள்</h2>
        </div>

        {/* ✅ Slider replacing grid/sidebar */}
        <Slider {...settings}>
          {highlights.map((highlight, index) => (
            <JobCard
              key={index}
              highlight={highlight}
              ClickHandler={ClickHandler}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

/* ✅ Card Component */
const JobCard = ({ highlight, ClickHandler }) => {
  return (
    <div className="p-2 h-100">
      <div className="wpo-blog-item shadow rounded-lg overflow-hidden d-flex flex-column h-100">
        {/* Image */}
        <div className="wpo-blog-img">
          <img
            src={highlight.screens}
            alt={highlight.title}
            className="img-fluid w-100"
            style={{ height: "220px", objectFit: "cover" }}
          />
        </div>

        {/* Content */}
        <div className="wpo-blog-content p-3 d-flex flex-column flex-grow-1">
          <h2 className="h5">
            <Link onClick={ClickHandler} to={`/job/${highlight.slug}`}>
              {highlight.title}
            </Link>
          </h2>
          <ul className="d-flex align-items-center list-unstyled small text-muted">
            <li className="me-2">
              <img
                src={highlight.avatar}
                alt={highlight.author || "Author"}
                className="rounded-circle"
                style={{ width: "25px", height: "25px", objectFit: "cover" }}
              />
            </li>
            <li className="me-2">By {highlight.author || "Admin"}</li>
            <li>{highlight.dateFormatted}</li>
          </ul>

          {/* ✅ Clamp description to 2 lines */}
          <p
            className="flex-grow-1"
            style={{
              textAlign: "justify",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "3em", // equal height for 2 lines
            }}
          >
            {highlight.description}
          </p>

          <Link
            onClick={ClickHandler}
            to={`/job/${highlight.slug}`}
            className="btn btn-sm btn-primary mt-2 align-self-start"
          >
            முழுமையாக காண்க
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobSlider;
