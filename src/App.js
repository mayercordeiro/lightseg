import { useEffect } from "react";
// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import NewHeader from "./components/NewHeader/NewHeader";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/NewHeader/ScrollToTop";
import AOS from 'aos';
// Pages
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Seguros from "./pages/Seguros";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import Post from "./components/Post/Post";
import PageNotFound from "./pages/PageNotFound";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NewHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/seguros" element={<Seguros />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
