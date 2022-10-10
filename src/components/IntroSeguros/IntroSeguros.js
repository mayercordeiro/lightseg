import React, { useState } from "react";
// CSS
import "./IntroSeguros.css";
// Components
import FirstTab from "./Tabs/FirstTab";
import SecondTab from "./Tabs/SecondTab";
import ThirdTab from "./Tabs/ThirdTab";
import ForthTab from "./Tabs/ForthTab";
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

  const handleTab4 = () => {
    setActiveTab("tab4");
  };

  return (
    <section className="intro_seguros">
      <div className="tabs">
        <div className="truck" data-aos="zoom-in-right" data-aos-once="true">
          <div className="imagesub">
            <img src={N1} loading="lazy" alt="Número Um" />
            <p>Nº 1 em Seguros para o Transporte de Cargas</p>
          </div>
        </div>

        <div className="imagesubMobile" data-aos="fade-up" data-aos-once="true">
          <img src={N1} loading="lazy" alt="Número Um" />
          <p>Nº 1 em Seguros para o Transporte de Cargas</p>
        </div>

        <div
          className="container_nav"
          data-aos="zoom-in-right"
          data-aos-once="true"
        >
          <ul className="nav">
            <li
              className={activeTab === "tab1" ? "active" : ""}
              onClick={handleTab1}
            >
              <span>RCTRC</span>
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
              <span>RCTRC – VI</span>
              <img src={Seta} />
            </li>
            <li
              className={activeTab === "tab4" ? "active" : ""}
              onClick={handleTab4}
            >
              <span>EMBARCADORES</span>
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
          {activeTab === "tab4" && (
            <>
              <ForthTab />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroSeguros;
