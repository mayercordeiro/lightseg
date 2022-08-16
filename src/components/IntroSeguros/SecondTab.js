import React from "react";
// Router
import { NavLink } from "react-router-dom";
// CSS
import styles from "./FirstTab.module.css";
// Images
import Seta from "../../assets/images/introseta.svg";

const FirstTab = () => {
  return (
    <div className={styles.segurosTexts}>
      <h2 id={styles.lineh1}>O que é o</h2>
      <h2 className={styles.h1gradiente}>Seguro RCF-DC</h2>
      <p>
        É um tipo de Seguro de Carga que protege a mercadoria contra perda total
        ou parcial em situações de: furto, estelionato, extorsão (simples ou
        sequestros) e apropriação indevida. tem o objetivo de proteger a própria
        transportadora para que ela não tenha que arcar financeiramente com
        danos ou perdas de mercadorias de terceiros em uma ocorrência como as
        mencionadas acima.
      </p>
    </div>
  );
};

export default FirstTab;
