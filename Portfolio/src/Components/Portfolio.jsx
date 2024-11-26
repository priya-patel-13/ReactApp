import React, { useState } from "react";
import "./Portfolio.css";

function PortfolioItem({ image, title, category }) {
  return (
    <div className="portfolio-item">
      <div className="portfolio-image-container">
        <img src={image} alt={title} className="portfolio-image" />
        <div className="overlay">
          <h3 className="portfolio-title">{title}</h3>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const portfolioItems = [
    { title: "Open Hard Cover", category: "Brand", image: "https://www.hostinger.co.uk/tutorials/wp-content/uploads/sites/2/2023/06/little-karma-co-website-homepage.png" },
    { title: "Notebook Cover", category: "Design", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIFXkGJm8iEb5xJAid2IIEYSfv98kRYSlACsxc2OQB7_ouecPXqIo6fH5EIXJLLq5EyYU&usqp=CAU" },
    { title: "Mug Mockup", category: "Graphic", image: "https://www.hubspot.com/hs-fs/hubfs/small-business-website_16.webp?width=650&height=372&name=small-business-website_16.webp" },
    { title: "Door Hanger", category: "Brand", image: "https://static.wixstatic.com/media/5e5a34_42923c8148604a6c8a87e1886c2f4b4b~mv2.jpg/v1/fill/w_940,h_558,al_c,q_85,enc_auto/5e5a34_42923c8148604a6c8a87e1886c2f4b4b~mv2.jpg" },
    { title: "Business Card", category: "Design", image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/06/seamwork-website-homepage.png" },
    { title: "Backpack Bag", category: "Graphic", image: "https://www.jimdo.com/static/22d0a02ad07ba4e0d50280d7574a9072/5d9e3/hej-its-her-com.png" },
    { title: "A4 Paper", category: "Design", image: "https://i.vimeocdn.com/video/1120624995-39e8ae6c2b646c9d66972a9f08ff17493243bdc7e0586c01663920b2f426f952-d_640?f=webp" },
    { title: "Tea Mug", category: "Brand", image: "https://www.wordstream.com/wp-content/uploads/2022/07/business-website-examples-dentist.png" },
    { title: "Shoe Box", category: "Design", image: "https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2023/04/10114555/Calendly-1.png" },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-heading">Portfolio.</h1>
      <div className="portfolio-filters">
        {["All", "Brand", "Design", "Graphic"].map((category) => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {filteredItems.map((item, index) => (
          <PortfolioItem
            key={index}
            image={item.image}
            title={item.title}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
