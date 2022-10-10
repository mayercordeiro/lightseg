// Router
import { NavLink } from "react-router-dom";
// CSS
import styles from "./ForthTab.module.css";
// Images
import Seta from "../../../assets/images/introseta.svg";

const FirstTab = () => {
  return (
    <div
      className={styles.segurosTexts}
      data-aos="fade-right"
      data-aos-once="true"
    >
      <h2 id={styles.lineh1}>Seguro</h2>
      <h2 className={styles.h1gradiente}>Transporte para Embarcadores</h2>
      <p>
        Este seguro é contratado pelo dono da mercadoria, se destina a cobrir
        danos a ela, quando estiver sendo transportada. O seguro para
        embarcadores está dividido em duas modalidades de seguro:
      </p>
      <div className={styles.adicionais}>
        <div className={styles.adicionaisContent}>
          <img src={Seta} loading="lazy" alt="Item" />
          <p>Nacional;</p>
        </div>
        <div className={styles.adicionaisContent}>
          <img src={Seta} loading="lazy" alt="Item" />
          <p>Internacional.</p>
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
