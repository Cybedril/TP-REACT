import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import ArticleCard from './components/ArticleCard/ArticleCard';
import ArticleCardV2 from './components/ArticleCard/ArticleCardV2';
import ArticleCardV3 from './components/ArticleCard/ArticleCardV3';
import ArticleCardV4 from './components/ArticleCard/ArticleCardV4';
import ArticleCardV5 from './components/ArticleCard/ArticleCardV5';
import Pagination from './components/Pagination/Pagination';   
import SearchBar from './components/SearchBar/SearchBar';
import RecentPosts from './components/RecentPosts/RecentPosts';
import Tags from './components/Tags/Tags';
import Footer from './components/Footer/Footer';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './components/Header/Header.css';
import './components/ArticleCard/ArticleCard.css';
import './components/Pagination/Pagination.css';
import './components/SearchBar/SearchBar.css';
import './components/RecentPosts/RecentPosts.css';
import './components/Tags/Tags.css';
import './components/Footer/Footer.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <ArticleCard/>
    <ArticleCardV2 />
    <ArticleCardV3 />
    <ArticleCardV4 />
    <ArticleCardV5 />
    <Pagination />
    <SearchBar />
    <RecentPosts />
    <Tags />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
