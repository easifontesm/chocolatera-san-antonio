import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import HeroSection from "./HeroSection";
import CheckerboardDivider from "./CheckerboardDivider";
import Header from "./Header";
import FeaturedProductsSection from "./FeaturedProductsSection";
import AboutSection from "./AboutSection";
import FooterSection from "./FooterSection";

// Optionally, import a bold geometric font in your _app.tsx or global CSS for the logo/title

export default function Home() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Header />
      <CheckerboardDivider />
      <HeroSection />
      <AboutSection />
      <FeaturedProductsSection />
      <FooterSection />
    </div>
  );
}