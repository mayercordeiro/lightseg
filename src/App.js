// CSS
import "./App.css";
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
import Mensagem from "./pages/Mensagem";

function App() {
  return (
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/seguros" element={<Seguros />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/mensagem" element={<Mensagem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    
  );
}

export default App;
