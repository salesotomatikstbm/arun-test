import React from "react";
import { useParams, Link } from "react-router-dom";
import useHighlightsNews from "../../hooks/useCinema"; // Custom hook
import Navbar from "../Navbar/Navbar";
import PageTitle from "../pagetitle/PageTitle";
import Footer from "../footer/Footer";

const CinemaSingle = () => {
  const { slug } = useParams(); // Get slug from URL
  const { highlights, loading, error } = useHighlightsNews();

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  if (loading) return <p>ஏற்றுகிறேன்...</p>;
  if (error) return <p>{error}</p>;

  // Find the specific history article
  const article = highlights.find((item) => item.slug === slug);

  if (!article) {
    return (
      <>
        <Navbar />
        <section className="wpo-blog-single-section mt-5">
          <div className="container">
            <h2>இந்த பதிவை காண முடியவில்லை.</h2>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* ✅ Navbar on top */}
      <Navbar />

  <PageTitle pageTitle={article.title} pagesub={'வரலாறு'}/> 
      <section className="wpo-blog-single-section section-padding mt-5">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col col-lg-8 col-12 mb-4">
              <div className="wpo-blog-content">
                <div className="post format-standard-image shadow-sm p-4 rounded">
                  {/* Featured Image */}
                  <div className="entry-media mb-4">
                    <img
                      src={article.screens}
                      alt={article.title}
                      className="img-fluid rounded"
                    />
                  </div>

                  {/* Meta */}
                  <div className="entry-meta mb-3">
                    <ul className="list-inline text-muted">
                      <li className="list-inline-item me-3">
                        <i className="fi flaticon-user"></i>{" "}
                        {article.author || "Admin"}
                      </li>
                      <li className="list-inline-item me-3">
                        <i className="fi flaticon-calendar"></i>{" "}
                        {article.dateFormatted}
                      </li>
                    </ul>
                  </div>

                  {/* Title */}
                  <h2 className="fw-bold mb-3">{article.title}</h2>

                  {/* Full Description */}
                  <p className="justified-text fs-5" style={{ textAlign: "justify" }}>{article.description}</p>
                </div>
              </div>
            </div>

            {/* Sidebar (same as History.js) */}
            <div className="col col-lg-4 col-12">
              <div className="blog-sidebar">
                {/* Post Categories Section */}
                <div className="widget category-widget">
                  <h3>விரைவான இணைப்பு</h3>
                  <ul>
                    <li>
                      <Link onClick={ClickHandler} to="/home">
                        முகப்பு
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/history">
                        வரலாறு
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/tamilnadu">
                        தமிழ்நாடு
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/india">
                        இந்தியா
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/world">
                        உலகம்
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/cinema">
                        சினிமா
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/job">
                        தொழில்
                      </Link>
                    </li>
                  </ul>
                </div>

              
              </div>
            </div>
            {/* End Sidebar */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CinemaSingle;
