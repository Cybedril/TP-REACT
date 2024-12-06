import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleCardS: React.FC<{
  articles: {
    id: number;
    title: string;
    urlImage: string;
    description: string;
  }[];
}> = ({ articles }) => {
  console.log(articles);
  return (
    <div className="grid grid-cols-4 gap-10">
      {articles.map(
        (article): React.JSX.Element => (
          <div
            key={article.id}
            className={article.id === 1 ? "col-span-4" : "col-span-2"}
          >
            <ArticleCard
              id={article.id}
              title={article.title}
              urlImage={article.urlImage}
              description={article.description}
            />
          </div>
        )
      )}
    </div>
  );
};

export default ArticleCardS;
