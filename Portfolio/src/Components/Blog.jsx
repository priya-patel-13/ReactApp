import React from "react";
import "./Blog.css";

function BlogCard({ category, title, date, image }) {
  return (
    <div className="blog-card">
      <div className="blog-image-container">
        <img src={image} alt={title} className="blog-image" />
      </div>
      <div className="blog-content">
        <span className="blog-category">{category}</span>
        <h3 className="blog-title">{title}</h3>
        <span className="blog-date">{date}</span>
      </div>
    </div>
  );
}

function App() {
  const blogs = [
    {
      category: "WEB DESIGN",
      title: "Best Way To Design",
      date: "August 15, 2024",
      image: "https://watson-vcard.netlify.app/img/blog/img-1.jpg"
    },
    {
      category: "PERSONAL",
      title: "Things I Need To Get Started",
      date: "August 10, 2024",
      image: "https://watson-vcard.netlify.app/img/blog/img-2.jpg"
    },
    {
      category: "DESIGN",
      title: "My Current Workspace",
      date: "August 4, 2024",
      image: "https://watson-vcard.netlify.app/img/blog/img-3.jpg"
    },
    {
      category: "TRAVEL",
      title: "Best Place To Travel This Summer",
      date: "July 26, 2024",
      image: "https://watson-vcard.netlify.app/img/blog/img-4.jpg"
    },
    {
      category: "TECHNOLOGY",
      title: "Latest UI Trends To Inspired From",
      date: "July 22, 2024",
      image: "https://watson-vcard.netlify.app/img/blog/img-5.jpg"
    },
    {
      category: "TECHNOLOGY",
      title: "Latest Tech 2018",
      date: "July 20, 2024",
      image: "https://watson-vcard.netlify.app/img/blog/img-6.jpg"
    },
    {
      category: "LIFESTYLE",
      title: "Best & Easy To Cook",
      date: "July 12, 2024",
      image: "https://watson-vcard.netlify.app/img/blog/img-7.jpg"
    },
    {
      category: "TECHNOLOGY",
      title: "Best Desinger",
      date: "July 8, 2024",
      image: "https://watson-vcard.netlify.app/img/blog/img-8.jpg"
    },
    {
      category: "TRAVEL",
      title: "Top Beaches In The World",
      date: "June 24, 2024",
      image: "https://watson-vcard.netlify.app/img/blog/img-9.jpg"
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-heading">My Blogs.</h1>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            category={blog.category}
            title={blog.title}
            date={blog.date}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
