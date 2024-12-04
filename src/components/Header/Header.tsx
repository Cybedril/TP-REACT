import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <section className="header">  
      <div className="header-overlay">
        <div className="header-content">
          <img src="/assets/logo.png" alt="Logo" className="header-logo" />
          <h1 className="welcomemessage">Coming Home Never <br/>Felt So Good!</h1>
          <p className="italictext">Quam a diam lorem explicabo quis fugit, ut aliquam modi.</p>
          <button className="header-button">FIND YOUR STYLE</button>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#living-room">Living Room</a></li>
          <li><a href="#kitchen">Kitchen</a></li>
          <li><a href="#outdoors">Outdoors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
