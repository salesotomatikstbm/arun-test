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
                    content_type: 'highlightsNews',  // Correct Content Type ID
                    order: '-fields.createdAt',  // Ensure this matches the field name (usually "createdAt" or similar)
                });

                console.log(response);  // Log the response to inspect the data

                const items = response.items.map((item) => ({
                    id: item.sys.id,
                    title: item.fields.title || "Untitled",
                    description: item.fields.description || "",
                    slug: item.fields.slug || "",
                    createdAt: item.fields.createdAt || "",  // Adjusted field name
                    avatar: item.fields.avatar?.fields?.file?.url
                        ? "https:" + item.fields.avatar.fields.file.url
                        : "", // Image URL with correct protocol
                    screens: item.fields.mainImage?.fields?.file?.url
                        ? "https:" + item.fields.mainImage.fields.file.url
                        : "", // Image URL with correct protocol
                    thumb: item.fields.thumbnail?.fields?.file?.url
                        ? "https:" + item.fields.thumbnail.fields.file.url
                        : "", // Image URL with correct protocol
                }));

                setHighlights(items);  // Save highlights data into state
            } catch (err) {
                console.error("Contentful fetch error:", err);
                setError("Failed to load highlights news");  // User-friendly error message
            } finally {
                setLoading(false);  // Stop loading after data is fetched
            }
        };

        fetchHighlights();
    }, []);

    // Use useMemo to transform data once and avoid unnecessary recalculations
    const formattedHighlights = useMemo(() => {
        return highlights.map((highlight) => ({
            ...highlight,
            dateFormatted: new Date(highlight.createdAt).toLocaleDateString(),  // Format date for better display
        }));
    }, [highlights]);

    return { highlights: formattedHighlights, loading, error };
};

export default useHighlightsNews;
