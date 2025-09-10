import { useState, useEffect, useMemo } from 'react';
import client from "../api/contentfulClient";  // Reusing the Contentful client

const useBreakingNews = () => {
    const [breakingNews, setBreakingNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBreakingNews = async () => {
            try {
                const response = await client.getEntries({
                    content_type: 'breakingNews',  // Ensure this matches your Contentful content type ID 
                    order: '-fields.date',  // Sort by the latest date
                });

                const items = response.items.map((item) => ({
                    id: item.sys.id,
                    title: item.fields.title || "Untitled",
                    description: item.fields.description || "",
                    date: item.fields.date || "",
                    imageUrl: item.fields.imageUrl?.fields?.file?.url
                        ? "https:" + item.fields.imageUrl.fields.file.url
                        : "",  // Ensure the URL has the correct protocol
                }));

                setBreakingNews(items); // Save breaking news into state
            } catch (err) {
                console.error("Contentful fetch error:", err);
                setError("Failed to load breaking news"); // Set user-friendly error message
            } finally {
                setLoading(false); // Stop loading once data is fetched
            }
        };

        fetchBreakingNews(); // Fetch the data when the component mounts
    }, []);

    // Use useMemo for transformed data to avoid unnecessary re-computation
    const formattedBreakingNews = useMemo(() => {
        return breakingNews.map((news) => ({
            ...news,
            dateFormatted: new Date(news.date).toLocaleDateString(), // Format date for better display
        }));
    }, [breakingNews]);

    return { breakingNews: formattedBreakingNews, loading, error }; // Return formatted breaking news
};

export default useBreakingNews;
