// Router
import { NavLink } from "react-router-dom";
// CSS
import styles from "./FirstTab.module.css";
// Images
import Seta from "../../../assets/images/introseta.svg";

const FirstTab = () => {
  return (
    <div className={styles.segurosTexts} data-aos="fade-right" data-aos-once="true">
      <h2 id={styles.lineh1}>Conheça o</h2>
      <h2 className={styles.h1gradiente}>Seguro RCTR-C</h2>
      <p>
        O RCTR-C é um seguro que indeniza eventuais danos à carga, em casos de
        acidentes ocorridos nas estradas, como colisões, tombamento, incêndios e
        explosões. Aqui na LightSeg somos especializados nesta modalidade de
        seguro e vamos lhe oferecer o que há de melhor.
      </p>
      <div className={styles.adicionais}>
        <div className={styles.adicionaisContent}>
          <img src={Seta} loading="lazy" alt="Item" />
          <p>Cobertura básica;</p>
        </div>
        <div className={styles.adicionaisContent}>
          <img src={Seta} loading="lazy" alt="Item" />
          <p>Coberturas adicionais;</p>
        </div>
        <div className={styles.adicionaisContent}>
          <img src={Seta} loading="lazy" alt="Item" />
          <p>Cláusulas específicas.</p>
        </div>
      </div>
      <div className={styles.saibamaisContainer}>
        <NavLink to="/seguros" className={styles.saibamais}>
          Saiba Mais
        </NavLink>
      </div>
    </div>
  );
};

export default FirstTab;
