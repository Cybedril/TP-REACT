import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function Home() {
  return (
    <>
      <div className="main">
        <Header
          urlBackgroundImage="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero02-free-img.jpg"
          bigTitle="Coming Home Never Felt So Good! "
          smallTitle="Quam a diamlorem explicabo quos fugit, ut aliquam modi."
          texteBouton="FIND YOUR STYLE"
        />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default Home;
