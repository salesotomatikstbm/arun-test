import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SheetsAPI = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('YOUR_GOOGLE_SHEET_CSV_URL');
                const rows = response.data.split('\n').slice(1); // Skip header row
                const formattedData = rows.map(row => {
                    const [
                        id, title, slug, screens, avater, thumb, description,
                        author, authorTitle, createAt, blogSingleImg, comment, blClass
                    ] = row.split(',');

                    return {
                        id,
                        title,
                        slug,
                        screens,
                        avater,
                        thumb,
                        description,
                        author,
                        authorTitle,
                        createAt,
                        blogSingleImg,
                        comment,
                        blClass
                    };
                });

                setBlogs(formattedData);
            } catch (error) {
                console.error("Error fetching data from Google Sheets:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {blogs.map(blog => (
                <div key={blog.id}>
                    <h3>{blog.title}</h3>
                    <img src={blog.screens} alt={blog.title} />
                    <p>{blog.description}</p>
                    <p>Author: {blog.author}</p>
                </div>
            ))}
        </div>
    );
};

export default SheetsAPI;
