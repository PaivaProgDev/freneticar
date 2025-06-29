import "./index.css";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Gallery from "./pages/Gallery";
import WhatsappLogo from "./assets/images/logos/whatsapp-logo.png";
import About from "./pages/about/About";

function App() {
  return (
    <main className="min-h-screen">
      <Link
        aria-label="Conversar pelo WhatsApp"
        to={
          "https://wa.me/5537998223255?text=Ol%C3%A1%20,%20estou%20vendo%20o%20seu%20projeto."
        }
        className="fixed z-100 w-12 bottom-5 right-5"
      >
        <img src={WhatsappLogo} alt="Logo do Whatsapp para contato" />
      </Link>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
