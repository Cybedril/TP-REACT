import React, { useState } from "react";
import ArticleCardS from "../ArticleCards/ArticleCards";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import RecentPosts from "../RecentPosts/RecentPosts";
import Tags from "../Tags/Tags";

function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  const articles = [
    {
      id: 1,
      title: "Consectetuer vehicula ab",
      urlImage:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg",
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum...",
    },
    {
      id: 2,
      title: "Consectetuer vehicula ab",
      urlImage:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg",
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum...",
    },
    {
      id: 3,
      title: "Consectetuer vehicula ab",
      urlImage:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg",
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum...",
    },
    {
      id: 4,
      title: "Consectetuer vehicula ab",
      urlImage:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg",
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum...",
    },
    {
      id: 5,
      title: "Consectetuer vehicula ab",
      urlImage:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg",
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum...",
    },
    {
      id: 6,
      title: "Consectetuer vehicula ab",
      urlImage:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg",
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum...",
    },
    {
      id: 7,
      title: "Consectetuer vehicula ab",
      urlImage:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg",
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum...",
    },
    {
      id: 8,
      title: "Consectetuer vehicula ab",
      urlImage:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg",
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum...",
    },
    {
      id: 9,
      title: "Consectetuer vehicula ab",
      urlImage:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg",
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum...",
    },
  ];

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  return (
    <div className="px-10 flex justify-between gap-20">
      <div>
        <ArticleCardS articles={currentArticles} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <div className="flex flex-col gap-10 pt-10">
        <SearchBar />
        <RecentPosts />
        <Tags />
      </div>
    </div>
  );
}

export default Main;
