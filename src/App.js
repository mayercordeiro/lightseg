import { useEffect } from "react";
// CSS
import "./App.css";
import "aos/dist/aos.css";
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Header/ScrollToTop";
// Pages
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Seguros from "./pages/Seguros";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import Post from "./components/Post/Post";
import PageNotFound from "./pages/PageNotFound";
// Components
import WhatsApp from "./components/WhatsApp/WhatsApp";
import AOS from 'aos';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/seguros" element={<Seguros />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <WhatsApp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
