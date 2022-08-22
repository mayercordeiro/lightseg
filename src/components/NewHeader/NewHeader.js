import { useEffect, useState } from "react";
// Router
import { NavLink, useLocation } from "react-router-dom";
// CSS
import "./NewHeader.css";
// Images
import Logo from "../../assets/images/logo-lightseg.svg";

const NewHeader = () => {
  const [scroll, setScroll] = useState("header");
  const [btnOpen, setBtnOpen] = useState("openbtn");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 40) {
      setScroll("headerScroll");
      setBtnOpen("openbtnScroll");
    } else {
      setScroll("header");
      setBtnOpen("openbtn");
    }
  });
  // Abrir Menu Mobile
  const [mobileActive, setMobileActive] = useState(false);
  const handleMobile = () => {
    setMobileActive(!mobileActive);
  };
  // Alterar menu != Home
  let location = useLocation();

  return (
    <header className={scroll}>
      <nav id={location.pathname != "/" ? "menuPages" : ""}>
        <div>
          <NavLink to="/">
            <img src={Logo} alt="Logo da LightSeg Corretora de Seguros" />
          </NavLink>
        </div>

        <div>
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/sobre">
              <li>Sobre</li>
            </NavLink>
            <NavLink to="/seguros">
              <li>Seguros</li>
            </NavLink>
            <NavLink to="/blog">
              <li>Blog</li>
            </NavLink>
            <NavLink to="/contato">
              <li>Contato</li>
            </NavLink>
            <NavLink to="/seguros" id="cote">
              <li>Cote Agora!</li>
            </NavLink>
          </ul>
        </div>

        <div
          id={mobileActive ? "mySidepanelAberto" : "mySidepanelFechado"}
          class="sidepanel"
        >
          <a href="javascript:void(0)" class="closebtn" onClick={handleMobile}>
            &times;
          </a>
          <NavLink to="/" onClick={handleMobile}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/sobre" onClick={handleMobile}>
            <li>Sobre</li>
          </NavLink>
          <NavLink to="/seguros" onClick={handleMobile}>
            <li>Seguros</li>
          </NavLink>
          <NavLink to="/blog" onClick={handleMobile}>
            <li>Blog</li>
          </NavLink>
          <NavLink to="/contato" onClick={handleMobile}>
            <li>Contato</li>
          </NavLink>
        </div>

        <button class={btnOpen} onClick={handleMobile}>
          &#9776;
        </button>
      </nav>
      <div className={mobileActive ? "fundoMobile" : ""} onClick={handleMobile}></div>
    </header>
  );
};

export default NewHeader;
