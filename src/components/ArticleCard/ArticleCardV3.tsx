import React from 'react';
import './ArticleCard.css';

const ArticleCardV3: React.FC = () => {
  return (
    <div className="article-card-half-2">
      <h2 className="article-title">
        Sunt doloremque blandit <br /> inven
      </h2>
      <p className="article-meta">November 20, 2017 / Living Room</p>
      <img
        className="article-image"
        src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img-768x406.jpg"
        alt="Elegant dining room design"
      />
      <p className="article-content">
        Nisl vel urna debitis morbi fringilla malesuada<br /> maiores optio! Ratione, facilis.
        Illum accusantium<br /> eros sed tristique, cubilia? Vel eu cupiditate.<br /> Habitasse
        urna molestie hendrerit, animi eros
      </p>
      <a className="read-more" href="#!">
        Read More »
      </a>
    </div>
  );
};

export default ArticleCardV3;
