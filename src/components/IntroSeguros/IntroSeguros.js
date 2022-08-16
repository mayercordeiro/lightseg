import React, { useState } from "react";
// CSS
import "./IntroSeguros.css";
// Components
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";
// Images
import N1 from "../../assets/images/intron1.svg";
import Seta from "../../assets/images/setahome.svg";

const IntroSeguros = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  return (
    <section className="intro_seguros">
      <div className="tabs">
        <div className="truck">
          <div className="imagesub">
            <img src={N1} loading="lazy" alt="Número Um" />
            <p>Nº 1 em Seguros para o Transporte de Cargas</p>
          </div>
        </div>

        <div className="imagesubMobile">
          <img src={N1} loading="lazy" alt="Número Um" />
          <p>Nº 1 em Seguros para o Transporte de Cargas</p>
        </div>

        <div className="container_nav">
          <ul className="nav">
            <li
              className={activeTab === "tab1" ? "active" : ""}
              onClick={handleTab1}
            >
              <span>RCTR-C</span>
              <img src={Seta} />
            </li>
            <li
              className={activeTab === "tab2" ? "active" : ""}
              onClick={handleTab2}
            >
              <span>RCF-DC</span>
              <img src={Seta} />
            </li>
            <li
              className={activeTab === "tab3" ? "active" : ""}
              onClick={handleTab3}
            >
              <span>RCTR-C – VI</span>
              <img src={Seta} />
            </li>
          </ul>
        </div>

        <div className="outlet">
          {activeTab === "tab1" && (
            <>
              <FirstTab />
            </>
          )}
          {activeTab === "tab2" && (
            <>
              <SecondTab />
            </>
          )}
          {activeTab === "tab3" && (
            <>
              <ThirdTab />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroSeguros;
