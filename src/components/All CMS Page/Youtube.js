import React from "react";
import useYoutube from "../../hooks/useYoutube"; // ✅ Updated import

const Youtube = () => {
    const { videos, loading, error } = useYoutube();

    if (loading) return <p>ஏற்றுகிறேன்...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="wpo-video-section mt-5">
            <div className="container">
                <div className="wpo-section-title">
                    <h2>Youtube வீடியோக்கள்</h2>
                </div>
                <div className="row">
                    {videos.map((video) => {
                        const embedUrl = video.youtubeUrl.includes("watch?v=")
                            ? video.youtubeUrl.replace("watch?v=", "embed/")
                            : video.youtubeUrl; // ✅ Handles both normal & embed links

                        return (
                            <div className="col col-lg-6 col-md-6 col-12 mb-4" key={video.id}>
                                <div className="video-card">
                                    <h4 className="mb-2">{video.title}</h4>
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            src={embedUrl}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Youtube;
