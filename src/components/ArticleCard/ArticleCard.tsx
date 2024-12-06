import React from "react";
import "./ArticleCard.css";

const ArticleCard: React.FC<{
  id: number;
  title: string;
  urlImage: string;
  description: string;
}> = ({ id, title, urlImage, description }) => {
  return (
    <div className="article-card">
      <h2 className="article-title">{title}</h2>
      <p className="article-meta">November 21, 2017 / Kitchen, Lifestyle</p>
      <img
        className="article-image"
        src={urlImage}
        alt="Modern kitchen design"
      />
      <p className="article-content">{description}</p>
      <a className="read-more" href="#!">
        Read More »
      </a>
    </div>
  );
};

export default ArticleCard;
