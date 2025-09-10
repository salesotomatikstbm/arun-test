import React from "react";
import { Link } from "react-router-dom";
import useHeroBlogs from "../../hooks/useHeroBlogs";  // Assuming this hook fetches your blogs from Contentful

const Hero = () => {
  const { blogs, loading, error } = useHeroBlogs();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>; // Show the error message

  return (
    <div className="wpo-blog-hero-area">
      <div className="container">
        <div className="sortable-gallery">
          <div className="gallery-filters"></div>
          <div className="row">
            <div className="col-lg-12">
              <div className="wpo-blog-grids gallery-container clearfix">
                {/* Display the first two blog posts */}
                {blogs.slice(0, 2).map((blog, bitem) => (
                  <div className="grid" key={bitem}>
                    <div className="img-holder">
                      <img
                        src={blog.screens || "/placeholder.jpg"}  // Display blog image or placeholder
                        alt={blog.title}
                        className="img img-responsive"
                      />
                      <div className="wpo-blog-content">
                        <div className="thumb">{blog.thumb}</div>
                        <h2>
                          <Link to={`/hero-blog-single/${blog.slug}`}>{blog.title}</Link>
                        </h2>
                        <p>{blog.description}</p>
                        <ul>
                          <li>
                            <img
                              src={blog.avatar || "/placeholder-avatar.jpg"}  // Display avatar or placeholder
                              alt={blog.author}
                            />
                          </li>
                          <li>By <Link to={`/hero-blog-single/${blog.slug}`}>{blog.author}</Link></li>
                          <li>{new Date(blog.date).toLocaleDateString()}</li>  {/* Format the date */}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Display the next two blog posts */}
                <div className="grid s2">
                  {blogs.slice(2, 4).map((blog, bitem) => (
                    <div className="img-holder" key={bitem}>
                      <img
                        src={blog.screens || "/placeholder.jpg"}  // Display blog image or placeholder
                        alt={blog.title}
                        className="img img-responsive"
                      />
                      <div className="wpo-blog-content">
                        <div className="thumb">{blog.thumb}</div>
                        <h2>
                          <Link to={`/hero-blog-single/${blog.slug}`}>{blog.title}</Link>
                        </h2>
                        <ul>
                          <li>By <Link to={`/hero-blog-single/${blog.slug}`}>{blog.author}</Link></li>
                          <li>{new Date(blog.date).toLocaleDateString()}</li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
