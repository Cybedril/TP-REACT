import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-section about">
          <h2>ABOUT</h2>
          <p>
            Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, 
            convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum 
            id orci porta dapibus. Sed porttitor lectus nibh.
          </p>
          <p className="footer-copyright">
            Copyright © 2024 Home Decor | Powered by Home Decor
          </p>
        </div>

        <div className="footer-section social">
          <h2>SOCIAL</h2>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i className="fab fa-pinterest" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className="footer-section contact">
          <h2>CONTACT US</h2>
          <p>
            500 Terry Francois St.<br />
            San Francisco,<br />
            CA 94158<br />
            +1-410-555-0134<br />
            info@example.com<br />
            contact@example.com
          </p>
          <div className="footer-links">
            <a href="#">About Us</a>
            <a href="#">Living Room</a>
            <a href="#">Kitchen</a>
            <a href="#">Outdoors</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
