import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="pt-[78px]">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Services />
      <Footer />
    </div>
  );
}

export default App;