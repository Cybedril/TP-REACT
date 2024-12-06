import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-black text-white mt-4">
        <div className="flex flex-col justify-center gap-11 min-h-[70vh]">
          <div className="flex justify-between px-16">
            <div className="mx-9 flex-1 flex flex-col items-center">
              <div>
                <h2 className="font-bold text-xl">ABOUT</h2>
              </div>

              <div className="text-center mt-4">
                <p>
                  Nulla quis lorem ut libero malesuada feugiat. Praesent sapien
                  massa, convallis a pellentesque nec, egestas non nisi.
                  Pellentesque in ipsum id orci porta dapibus. Sed porttitor
                  lectus nibh.
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-10 items-center">
              <h2 className="font-bold text-xl">SOCIAL</h2>
              <div className="flex gap-5 justify-center">
                <div className="bg-white text-black w-8 h-8 flex justify-center items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="bg-white text-black w-8 h-8 flex justify-center items-center">
                  <a href="#">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="bg-white text-black w-8 h-8 flex justify-center items-center">
                  <a href="#">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="bg-white text-black w-8 h-8 flex justify-center items-center">
                  <a href="#">
                    <i className="fab fa-pinterest" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center gap-5">
              <h2 className="font-bold text-xl">CONTACT US</h2>
              <div className="">
                <p className="text-center">500 Terry Francois St.</p>
                <p className="text-center">San Francisco,</p>
                <p className="text-center">CA 94158</p>
                <p className="text-center">+1-410-555-0134</p>
                <p className="text-center">info@example.com</p>
                <p className="text-center">contact@example.com</p>
              </div>
            </div>
          </div>
          <hr className="border-t-1 border-gray-900" />
          <div className="flex justify-between px-24">
            <div className="">
              <p className="">
                Copyright © 2024 Home Decor | Powered by Home Decor
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#">About Us</a>
              <Link to="/living-room">Living Room</Link>
              <Link to="/kitchen">Kitchen</Link>
              <a href="#">Outdoors</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
