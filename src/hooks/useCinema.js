import { useState, useEffect, useMemo } from 'react';
import client from "../api/contentfulClient";  // Contentful client setup

const useHighlightsNews = () => {
    const [highlights, setHighlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHighlights = async () => {
            try {
                const response = await client.getEntries({
                    content_type: 'cinema',  // Correct Content Type ID
                    order: '-sys.createdAt',  // ✅ use system field for sorting
                });

                console.log(response);  // Log to debug

                const items = response.items.map((item) => ({
                    id: item.sys.id,
                    title: item.fields.title || "Untitled",
                    description: item.fields.description || "",
                    slug: item.fields.slug || "",

                    // ✅ Author (added now)
                    author: item.fields.author || "Admin",

                    createdAt: item.sys.createdAt || "",  // ✅ system field for date

                    avatar: item.fields.avatar?.fields?.file?.url
                        ? "https:" + item.fields.avatar.fields.file.url
                        : "",

                    screens: item.fields.mainImage?.fields?.file?.url
                        ? "https:" + item.fields.mainImage.fields.file.url
                        : "",

                    thumb: item.fields.thumbnail?.fields?.file?.url
                        ? "https:" + item.fields.thumbnail.fields.file.url
                        : "",
                }));

                setHighlights(items);
            } catch (err) {
                console.error("Contentful fetch error:", err);
                setError("Failed to load highlights news");
            } finally {
                setLoading(false);
            }
        };

        fetchHighlights();
    }, []);

    // ✅ Add formatted date
    const formattedHighlights = useMemo(() => {
        return highlights.map((highlight) => ({
            ...highlight,
            dateFormatted: highlight.createdAt
                ? new Date(highlight.createdAt).toLocaleDateString("ta-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                  })
                : "",
        }));
    }, [highlights]);

    return { highlights: formattedHighlights, loading, error };
};

export default useHighlightsNews;
