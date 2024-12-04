import React from 'react';
import './ArticleCard.css';

const ArticleCardV5: React.FC = () => {
  return (
    <div className="article-card-half-4">
      <h2 className="article-title">
        Litora aptent magnam <br /> laoreet!
      </h2>
      <p className="article-meta">November 7, 2017 / Living Room</p>
      <img
        className="article-image"
        src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot-768x512.jpg"
        alt="Elegant dining room design"
      />
      <p className="article-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit. Ut elit tellus,
        luctus nec ullamcorper mattis,<br /> pulvinar dapibus leo. Sed non mauris
        vitae erat<br /> consequat auctor eu
      </p>
      <a className="read-more" href="#!">
        Read More »
      </a>
    </div>
  );
};

export default ArticleCardV5;
