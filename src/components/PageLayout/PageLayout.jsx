import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function PageLayout({ children, padding=true }) {
  const css = padding ? "p-0 m-0 mx-8 md:mx-20":"";
  return (
    <div className={css}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default PageLayout;
