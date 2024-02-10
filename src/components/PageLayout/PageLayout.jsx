import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function PageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
