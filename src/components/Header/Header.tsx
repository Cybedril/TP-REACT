import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Header.css";
import { url } from "inspector";
interface HeaderProps {
  urlBackgroundImage: string;
  bigTitle: string;
  smallTitle?: string;
  texteBouton?: string;
}

const Header: React.FC<HeaderProps> = ({
  urlBackgroundImage,
  bigTitle,
  smallTitle,
  texteBouton,
}) => {
  return (
    <section className="header ">
        <div className="header-overlay relative isolate overflow-hidden bg-gray-900 min-h-screen">
          <img
            alt=""
            src={urlBackgroundImage}
            className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-75"
          />
          <div className="image-nav">
            <div className="logo">
              <Link to="/">
                <img
                  src="/assets/logo.png"
                  alt="Logo"
                  className="header-logo"
                />
              </Link>
            </div>
            <div className="nav">
              <nav className="navbar">
                <ul>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <Link to="/living-room">Living Room</Link>
                  </li>
                  <li>
                    <Link to="/kitchen">Kitchen</Link>
                  </li>
                  <li>
                    <a href="#outdoors">Outdoors</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header-content pt-48">
            <div>
              <h1 className="welcomemessage text-8xl leading-tight">
                {bigTitle}
              </h1>
              <p className="text-center text-xl italic">{smallTitle}</p>
            </div>
            {texteBouton && (
              <div className="button">
                <button className="header-button mt-5">{texteBouton}</button>
              </div>
            )}
          </div>
        </div>
      </section>
  );
};

export default Header;
