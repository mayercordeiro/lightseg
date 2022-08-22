// Router
import { NavLink } from "react-router-dom";
// CSS
import styles from "./SecondTab.module.css";

const SecondTab = () => {
  return (
    <div className={styles.segurosTexts} data-aos="fade-right" data-aos-once="true">
      <h2 id={styles.lineh1}>O que é o</h2>
      <h2 className={styles.h1gradiente}>Seguro RCF-DC</h2>
      <p>
        Seguro que protege a mercadoria contra furto, estelionato, extorsão (simples ou
        sequestros) e apropriação indevida. tem o objetivo de proteger a própria
        transportadora para que ela não tenha que arcar financeiramente com
        danos ou perdas de mercadorias de terceiros em uma ocorrência como as
        mencionadas.
      </p>
      <div className={styles.saibamaisContainer}>
        <NavLink to="/seguros" className={styles.saibamais}>
          Saiba Mais
        </NavLink>
      </div>
    </div>
  );
};

export default SecondTab;
