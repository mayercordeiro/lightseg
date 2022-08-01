// CSS
import styles from "./Seguros.module.css";
// Components
import Breadcrumbs from "../components/Breadcrumb/Breadcrumbs";
import ModalSeguros from "../components/ModalSeguros/ModalSeguros";
import ModalSegurosText from "../components/ModalSeguros/ModalSegurosText";
import ModalAuto from "../components/ModalSeguros/ModalAuto";
import ModalAutoText from "../components/ModalSeguros/ModalAutoText";
import ModalVida from "../components/ModalSeguros/ModalVida";
import ModalVidaText from "../components/ModalSeguros/ModalVidaText";
import ModalResidencial from "../components/ModalSeguros/ModalResidencial";
import ModalResidencialText from "../components/ModalSeguros/ModalResidencialText";
import ModalAffinity from "../components/ModalSeguros/ModalAffinity";
import ModalAffinityText from "../components/ModalSeguros/ModalAffinityText";

const Seguros = () => {
  return (
    <section>
      <Breadcrumbs titulo="Seguros" />
      <h1>Confira Nossas Soluçoes em Seguros</h1>
      <h2></h2>
      <section className={styles.seguros}>
        <h1>Confira Nossas Soluçoes em Seguros</h1>
        <h2>Saiba mais sobre os nossos diferentes tipos de seguro e Cote Agora! proteja o futuro financeiro da sua empresa, seu e de sua família.</h2>
        <div className={styles.segurosMain}>
          <div
            className={`${styles.segurosContainer} ${styles.bkg_transporte_cargas}`}
          >
            <h2>Transporte de Cargas</h2>
          </div>
          <div className={styles.segurosLinks}>
            <ModalSegurosText />
            <ModalSeguros />
          </div>
        </div>
        
        <div className={styles.segurosMainRight}>
          <div
            className={`${styles.segurosContainer} ${styles.bkg_auto}`}
          >
            <h2>Auto</h2>
          </div>
          <div className={styles.segurosLinks}>
            <ModalAutoText />
            <ModalAuto />
          </div>
        </div>

        <div className={styles.segurosMain}>
          <div
            className={`${styles.segurosContainer} ${styles.bkg_vida}`}
          >
            <h2>Vida</h2>
          </div>
          <div className={styles.segurosLinks}>
            <ModalVidaText />
            <ModalVida />
          </div>
        </div>

        <div className={styles.segurosMainRight}>
          <div
            className={`${styles.segurosContainer} ${styles.bkg_residencial}`}
          >
            <h2>Residencial</h2>
          </div>
          <div className={styles.segurosLinks}>
            <ModalResidencialText />
            <ModalResidencial />
          </div>
        </div>

        <div className={styles.segurosMain}>
          <div
            className={`${styles.segurosContainer} ${styles.bkg_affinity}`}
          >
            <h2>Affinity</h2>
          </div>
          <div className={styles.segurosLinks}>
            <ModalAffinityText />
            <ModalAffinity />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Seguros;
