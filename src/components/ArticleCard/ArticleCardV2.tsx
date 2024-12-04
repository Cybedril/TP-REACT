import React from 'react';
import './ArticleCard.css';

const ArticleCardV2: React.FC = () => {
  return (
    <div className="article-card-half">
      <h2 className="article-title">
        Taciti hendrerit dis odit<br /> incident
      </h2>
      <p className="article-meta">November 21, 2017 / Kitchen, Living Room, Reading Room</p>
      <img
        className="article-image"
        src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-1024x647.jpg"
        alt="Elegant dining room design"
      />
      <p className="article-content">
        Cillum corrupti accusam non cumque alias ipsa,<br /> platea! Mollis auctor,
        repellendus sagittis? Corporis<br /> dictums mollis, curae. Eaque, quam per,
        praesent<br /> pretium eu non cumque animi dolorem.
      </p>
      <a className="read-more" href="#!">
        Read More »
      </a>
    </div>
  );
};

export default ArticleCardV2;
