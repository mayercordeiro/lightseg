// Router
import { NavLink } from "react-router-dom";
// CSS
import styles from "./ThirdTab.module.css";

const FirstTab = () => {
  return (
    <div
      className={styles.segurosTexts}
      data-aos="fade-right"
      data-aos-once="true"
    >
      <h2 id={styles.lineh1}>Seguro</h2>
      <h2 className={styles.h1gradiente}>RCTRC–VI</h2>
      <p>
        Esta apólice de seguro é destinada às transportadoras que operam em
        transporte rodoviários de cargas com viagens internacionais.
      </p>
      <div className={styles.saibamaisContainer}>
        <NavLink to="/seguros" className={styles.saibamais}>
          Saiba Mais
        </NavLink>
      </div>
    </div>
  );
};

export default FirstTab;
