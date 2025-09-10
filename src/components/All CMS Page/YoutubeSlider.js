import React from "react";
import Slider from "react-slick";
import useYoutube from "../../hooks/useYoutube"; // ✅ Custom hook

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const YoutubeSlider = () => {
  const { videos, loading, error } = useYoutube();

  if (loading) return <p>ஏற்றுகிறேன்...</p>;
  if (error) return <p>{error}</p>;

  // ✅ Slider settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="wpo-video-section mt-5">
      <div className="container">
        <div className="wpo-section-title">
          <h2>Youtube வீடியோக்கள்</h2>
        </div>

        {/* ✅ Slider instead of grid */}
        <Slider {...settings}>
          {videos.map((video) => {
            const embedUrl = video.youtubeUrl.includes("watch?v=")
              ? video.youtubeUrl.replace("watch?v=", "embed/")
              : video.youtubeUrl;

            return (
              <div className="p-2" key={video.id}>
                <div className="video-card shadow rounded overflow-hidden">
                  <h4 className="mb-2 p-2">{video.title}</h4>
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-100"
                      style={{ height: "300px" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default YoutubeSlider;
