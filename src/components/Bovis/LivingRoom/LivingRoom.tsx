import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Main from "../../Main/Main";

const LivingRoom: React.FC = () => {
  return (
    <>
      <Header
        urlBackgroundImage="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img.jpg"
        bigTitle="Living Room"
      />
      <Main />
      <Footer />
    </>
  );
};
export default LivingRoom;
