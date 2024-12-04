import React from 'react';
import './ArticleCard.css';

const ArticleCard: React.FC = () => {
  return (
    <div className="article-card">
      <h2 className="article-title">Consectetuer vehicula ab</h2>
      <p className="article-meta">November 21, 2017 / Kitchen, Lifestyle</p>
      <img
        className="article-image"
        src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg"
        alt="Modern kitchen design"
      />
      <p className="article-content">
        Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum!
        Minus eum eveniet,<br /> praesentium elementum interdum! Sodales, metus, velit
        voluptatibus voluptas lorem, etiam<br /> voluptate? Aenean possimus montes
        fugiat [...]
      </p>
      <a className="read-more" href="#!">
        Read More »
      </a>
    </div>
  );
};

export default ArticleCard;
