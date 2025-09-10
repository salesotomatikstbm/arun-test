import { useEffect, useState, useMemo } from "react";
import client from "../api/contentfulClient";

const useHeroBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "homeHeader", // Ensure this matches your Contentful content type ID 
          order: "-fields.date",
        });

        const items = response.items.map((item) => ({
          id: item.sys.id,
          title: item.fields.title || "Untitled",
          description: item.fields.description || "",
          author: item.fields.author || "Unknown",
          date: item.fields.date || "",
          avatar: item.fields.thumbnail?.fields?.file?.url
            ? "https:" + item.fields.thumbnail.fields.file.url
            : "", // Ensure the URL has the correct protocol
          screens: item.fields.mainImage?.fields?.file?.url
            ? "https:" + item.fields.mainImage.fields.file.url
            : "", // Ensure the URL has the correct protocol
        }));

        setBlogs(items); // Save blogs into state
      } catch (err) {
        console.error("Contentful fetch error:", err);
        setError("Failed to fetch data from Contentful."); // Set user-friendly error message
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchData(); // Fetch the data when the component mounts
  }, []);

  // Use useMemo for the transformed data to avoid unnecessary re-computation
  const formattedBlogs = useMemo(() => {
    return blogs.map((blog) => ({
      ...blog,
      dateFormatted: new Date(blog.date).toLocaleDateString(), // Format date for better display
    }));
  }, [blogs]);

  return { blogs: formattedBlogs, loading, error }; // Return formatted blogs
};

export default useHeroBlogs;
