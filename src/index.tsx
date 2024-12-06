import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import LivingRoom from "./components/Bovis/LivingRoom/LivingRoom";
import Kitchen from "./components/Bovis/Kitchen/Kitchen";
import Home from "./components/Home/Home";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./components/Header/Header.css";
import "./components/ArticleCard/ArticleCard.css";
import "./components/Pagination/Pagination.css";
import "./components/SearchBar/SearchBar.css";
import "./components/RecentPosts/RecentPosts.css";
import "./components/Tags/Tags.css";
import "./components/Footer/Footer.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <div className="wrapper"> 
      <React.StrictMode></React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/living-room" element={<LivingRoom />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
