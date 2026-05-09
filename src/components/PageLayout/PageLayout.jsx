import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function PageLayout({ children, padding = true }) {
  const css = padding ? "mx-auto max-w-[1500px] px-4 md:px-8" : "";
  return (
    <div className={css}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default PageLayout;
