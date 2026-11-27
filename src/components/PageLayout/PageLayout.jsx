import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function PageLayout({ children, fullBleed = false }) {
  return (
    <div className="relative min-h-dvh">
      <Header />
      <main id="main-content" className={fullBleed ? "" : "shell"}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
