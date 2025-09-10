import { useState, useEffect } from "react";
import client from "../api/contentfulClient";  // Contentful client setup

const useYoutube = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "youtube",  // ✅ Must match Contentful Content Type ID
                    order: "-sys.createdAt",
                });

                const items = response.items.map((item) => ({
                    id: item.sys.id,
                    title: item.fields.title || "Untitled Video",
                    youtubeUrl: item.fields.youtubeUrl || "",
                }));

                setVideos(items);
            } catch (err) {
                console.error("Contentful fetch error:", err);
                setError("Failed to load YouTube videos");
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    return { videos, loading, error };
};

export default useYoutube;
