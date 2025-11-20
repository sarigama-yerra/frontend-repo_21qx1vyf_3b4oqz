import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#140d09]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductGrid />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App
