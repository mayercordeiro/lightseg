// Router
import { NavLink } from "react-router-dom";
// CSS
import styles from "./Intro.module.css";
// Images
import Seta from "../../assets/images/introseta.svg";
import N1 from "../../assets/images/intron1.svg";
import Truck from "../../assets/images/introtruck.jpg";

const Intro = () => {
  return (
    <section className={styles.seguros}>
      <div className={styles.segurosImages}>
        <div className={styles.truckContainer}>
          <img src={Truck} loading="lazy" alt="Caminhões transportando cargas parados em uma estrada" />
        </div>
        <div className={styles.imagesub}>
          <img src={N1} loading="lazy" alt="Número Um" />
          <p>Nº 1 em Seguros para o Transporte de Cargas</p>
        </div>
      </div>
      <div className={styles.segurosTexts}>
        <h1 id={styles.lineh1}>Conheça o</h1>
        <h1 className={styles.h1gradiente}>Seguro RCTR-C</h1>
        <p>
          O RCTR-C é um seguro que indeniza eventuais danos à carga, em casos de
          acidentes ocorridos nas estradas, como colisões, tombamento, incêndios
          e explosões. Aqui na LightSeg somos especializados nesta modalidade de
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
    </section>
  );
};

export default Intro;
