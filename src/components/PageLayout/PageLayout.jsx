import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function PageLayout({ children, padding = true }) {
  const css = padding ? "mx-auto max-w-[1500px] w-full min-w-0 px-4 md:px-8" : "mx-auto max-w-[1500px] w-full min-w-0";
  return (
    <div className={css}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default PageLayout;
