import { useEffect } from "react";
// CSS
import styles from "./Seguros.module.css";
// Components
import Breadcrumbs from "../components/Breadcrumb/Breadcrumbs";
import OpenModal from "../components/Modal/OpenModal";
import AOS from 'aos';
// Forms
import FormGeral from "../components/Forms/FormGeral";
import FormAuto from "../components/Forms/FormAuto";

const Seguros = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <section>
      <Breadcrumbs titulo="Seguros" />
      <section className={styles.seguros}>
        <h1 data-aos="fade-right" data-aos-once="true" data-aos-delay="300">Confira Nossas Soluções em Seguros</h1>
        <h2 data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
          Saiba mais sobre os nossos diferentes tipos de seguro e Cote Agora!
          Proteja o futuro financeiro da sua empresa, seu e de sua família.
        </h2>

        <div className={styles.segurosMain} data-aos="zoom-in" data-aos-once="true" data-aos-delay="300">
          <div
            className={`${styles.segurosContainer} ${styles.bkg_transporte_cargas}`}
          >
            <h2>Transporte de Cargas</h2>
          </div>
          <div className={styles.segurosLinks}>
            <OpenModal
              estilo="botaoModalSaibaMais"
              tituloBtn="Saiba Mais"
              form="Em breve..."
            />
            <OpenModal
              estilo="botaoModalSeguros"
              tituloBtn="Cote Agora!"
              form={<FormGeral titulo="Cotação Seguro Transporte de Cargas" />}
            />
          </div>
        </div>

        <div className={styles.segurosMainRight} data-aos="zoom-in" data-aos-once="true" data-aos-delay="300">
          <div className={`${styles.segurosContainer} ${styles.bkg_auto}`}>
            <h2>Auto</h2>
          </div>
          <div className={styles.segurosLinks}>
            <OpenModal
              estilo="botaoModalSaibaMais"
              tituloBtn="Saiba Mais"
              form="Em breve..."
            />
            <OpenModal
              estilo="botaoModalSeguros"
              tituloBtn="Cote Agora!"
              form={<FormAuto titulo="Cotação Seguro Auto" />}
            />
          </div>
        </div>

        <div className={styles.segurosMain} data-aos="zoom-in" data-aos-once="true" data-aos-delay="300">
          <div className={`${styles.segurosContainer} ${styles.bkg_vida}`}>
            <h2>Vida</h2>
          </div>
          <div className={styles.segurosLinks}>
            <OpenModal
              estilo="botaoModalSaibaMais"
              tituloBtn="Saiba Mais"
              form="Em breve..."
            />
            <OpenModal
              estilo="botaoModalSeguros"
              tituloBtn="Cote Agora!"
              form={<FormGeral titulo="Cotação Seguro de Vida" />}
            />
          </div>
        </div>

        <div className={styles.segurosMainRight} data-aos="zoom-in" data-aos-once="true" data-aos-delay="300">
          <div
            className={`${styles.segurosContainer} ${styles.bkg_residencial}`}
          >
            <h2>Residencial</h2>
          </div>
          <div className={styles.segurosLinks}>
            <OpenModal
              estilo="botaoModalSaibaMais"
              tituloBtn="Saiba Mais"
              form="Em breve..."
            />
            <OpenModal
              estilo="botaoModalSeguros"
              tituloBtn="Cote Agora!"
              form={<FormGeral titulo="Cotação Seguro Residencial" />}
            />
          </div>
        </div>

        <div className={styles.segurosMain} data-aos="zoom-in" data-aos-once="true" data-aos-delay="300">
          <div className={`${styles.segurosContainer} ${styles.bkg_affinity}`}>
            <h2>Affinity</h2>
          </div>
          <div className={styles.segurosLinks}>
            <OpenModal
              estilo="botaoModalSaibaMais"
              tituloBtn="Saiba Mais"
              form="Em breve..."
            />
            <OpenModal
              estilo="botaoModalSeguros"
              tituloBtn="Cote Agora!"
              form={<FormGeral titulo="Cotação Seguro Affinity" />}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Seguros;
