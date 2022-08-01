import { useEffect } from "react";
// CSS
import styles from "./HomeStart.module.css";
// Router
import { NavLink } from "react-router-dom";
// Components
import Modal from "../Modal/Modal";
import ModalAuto from "../Modal/ModalAuto";
import ModalVida from "../Modal/ModalVida";
import ModalResidencial from "../Modal/ModalResidencial";
import ModalAffinity from "../Modal/ModalAffinity";
import Carousel from "react-bootstrap/Carousel";

const HomeStart = () => {
  return (
    <main className={styles.containerMain}>
      <section className={styles.intro}>
        <h1>Seguros para o Transporte de CargasV18.00</h1>
        <p>
          Cada produto transportado possui sua importância e característica. A
          Lightseg está pronta para apresentar a melhor seguradora, o melhor
          produto e as coberturas ideais para proteção das cargas transportadas.
        </p>
      </section>

      <section className={styles.cotacao}>
        <h2 className={styles.cotacao_h2}>Faça sua cotação</h2>
        <p className={styles.cotacao_p}>Selecione um produto e vamos juntos!</p>
        <Carousel id={styles.slide} variant="dark">
          <Carousel.Item>
            <div className={styles.slideseguros}>
              <Modal />
              <ModalAuto />
              <ModalVida />
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className={styles.slideseguros}>
            <ModalResidencial />
            <ModalAffinity />
            </div>
          </Carousel.Item>
        </Carousel>
        <div>
          <NavLink to="/seguros" className={styles.botaoseguros}>
            <a>Conheça Todos os Nossos Seguros</a>
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default HomeStart;
