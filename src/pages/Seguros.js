// CSS
import styles from "./Seguros.module.css";
// Components
import Breadcrumbs from "../components/Breadcrumb/Breadcrumbs";
import OpenModal from "../components/Modal/OpenModal";
// Forms
import FormGeral from "../components/Forms/FormGeral";
import FormAuto from "../components/Forms/FormAuto";
// Texts
import TransporteDeCargas from "../components/TextSeguros/TransporteDeCargas";
import Auto from "../components/TextSeguros/Auto";
import Vida from "../components/TextSeguros/Vida";
import Residencial from "../components/TextSeguros/Residencial";
import Affinity from "../components/TextSeguros/Affinity";
import Ambiental from "../components/TextSeguros/Ambiental";

const Seguros = () => {
  return (
    <section>
      <Breadcrumbs titulo="Seguros" />
      <section className={styles.seguros}>
        <h1 data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
          Confira Nossas Soluções em Seguros
        </h1>
        <h2 data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
          Saiba mais sobre os nossos diferentes tipos de seguros e Cote Agora
          Mesmo! Proteja o futuro financeiro da sua empresa, seu e de sua
          família.
        </h2>

        <div
          className={styles.segurosMain}
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <div
            className={`${styles.segurosContainer} ${styles.bkg_transporte_cargas}`}
          >
            <h2>Transporte de Cargas</h2>
          </div>
          <div className={styles.segurosLinks}>
            <OpenModal
              estilo="botaoModalSaibaMais"
              tituloBtn="Saiba Mais"
              form={<TransporteDeCargas />}
            />
            <OpenModal
              estilo="botaoModalSeguros"
              tituloBtn="Cote Agora!"
              form={<FormGeral titulo="Cotação Seguro Transporte de Cargas" />}
            />
          </div>
        </div>

        <div
          className={styles.segurosMainRight}
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <div className={`${styles.segurosContainer} ${styles.bkg_auto}`}>
            <h2>Auto</h2>
          </div>
          <div className={styles.segurosLinks}>
            <OpenModal
              estilo="botaoModalSaibaMais"
              tituloBtn="Saiba Mais"
              form={<Auto />}
            />
            <OpenModal
              estilo="botaoModalSeguros"
              tituloBtn="Cote Agora!"
              form={<FormAuto titulo="Cotação Seguro Auto" />}
            />
          </div>
        </div>

        <div
          className={styles.segurosMain}
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <div className={`${styles.segurosContainer} ${styles.bkg_vida}`}>
            <h2>Vida</h2>
          </div>
          <div className={styles.segurosLinks}>
            <OpenModal
              estilo="botaoModalSaibaMais"
              tituloBtn="Saiba Mais"
              form={<Vida />}
            />
            <OpenModal
              estilo="botaoModalSeguros"
              tituloBtn="Cote Agora!"
              form={<FormGeral titulo="Cotação Seguro de Vida" />}
            />
          </div>
        </div>

        <div
          className={styles.segurosMainRight}
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <div
            className={`${styles.segurosContainer} ${styles.bkg_residencial}`}
          >
            <h2>Residencial</h2>
          </div>
          <div className={styles.segurosLinks}>
            <OpenModal
              estilo="botaoModalSaibaMais"
              tituloBtn="Saiba Mais"
              form={<Residencial />}
            />
            <OpenModal
              estilo="botaoModalSeguros"
              tituloBtn="Cote Agora!"
              form={<FormGeral titulo="Cotação Seguro Residencial" />}
            />
          </div>
        </div>

        <div
          className={styles.segurosMain}
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <div className={`${styles.segurosContainer} ${styles.bkg_affinity}`}>
            <h2>Affinity</h2>
          </div>
          <div className={styles.segurosLinks}>
            <OpenModal
              estilo="botaoModalSaibaMais"
              tituloBtn="Saiba Mais"
              form={<Affinity />}
            />
            <OpenModal
              estilo="botaoModalSeguros"
              tituloBtn="Cote Agora!"
              form={<FormGeral titulo="Cotação Seguro Affinity" />}
            />
          </div>
        </div>

        <div
          className={styles.segurosMainRight}
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <div className={`${styles.segurosContainer} ${styles.bkg_ambiental}`}>
            <h2>Ambiental</h2>
          </div>
          <div className={styles.segurosLinks}>
            <OpenModal
              estilo="botaoModalSaibaMais"
              tituloBtn="Saiba Mais"
              form={<Ambiental />}
            />
            <OpenModal
              estilo="botaoModalSeguros"
              tituloBtn="Cote Agora!"
              form={<FormGeral titulo="Cotação Seguro Ambiental" />}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Seguros;
