import React from 'react';
import './ArticleCard.css';

const ArticleCardV4: React.FC = () => {
  return (
    <div className="article-card-half-3">
      <h2 className="article-title">
        Fugit quaerat vulputate!<br /> Irure.
      </h2>
      <p className="article-meta">November 20, 2017 / Living Room</p>
      <img
        className="article-image"
        src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-1024x647.jpg"
        alt="Elegant dining room design"
      />
      <p className="article-content">
        Sodales inceptos dolorem elit molestias minima<br /> quam ipsa proident maecenas magnam massa.
        Hac<br /> maiores? Dis elit facilisis sapiente! Vulputate<br /> praesent esse! Hic? Possimus elit?<br />
        Molestiae voluptates
      </p>
      <a className="read-more" href="#!">
        Read More »
      </a>
    </div>
  );
};

export default ArticleCardV4;
