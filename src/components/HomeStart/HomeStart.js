import { useEffect } from "react";
// CSS
import styles from "./HomeStart.module.css";
// Router
import { NavLink } from "react-router-dom";
// Components
import Carousel from "react-bootstrap/Carousel";
import OpenModal from "../Modal/OpenModal";
import AOS from 'aos';
import "aos/dist/aos.css";
// Images
import Truck from "../../assets/images/truck.svg";
import Car from "../../assets/images/car.svg";
import Vida from "../../assets/images/vida.svg";
import House from "../../assets/images/house.svg";
import People from "../../assets/images/people.svg";
// Forms
import FormGeral from "../Forms/FormGeral";
import FormAuto from "../Forms/FormAuto";

const HomeStart = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <main className={styles.containerMain} data-aos="fade-right" data-aos-once="true">
      <section className={styles.intro}>
        <h1>Seguros para o Transporte de Cargas</h1>
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
              <OpenModal
                estilo="botaoModal"
                imagemBtn={Truck}
                tituloBtn="Transporte de Cargas"
                form={
                  <FormGeral titulo="Cotação Seguro Transporte de Cargas" />
                }
              />
              <OpenModal
                estilo="botaoModal"
                imagemBtn={Car}
                tituloBtn="Seguro Auto"
                form={<FormAuto titulo="Cotação Seguro Auto" />}
              />
              <OpenModal
                estilo="botaoModal"
                imagemBtn={Vida}
                tituloBtn="Seguro de Vida"
                form={<FormGeral titulo="Cotação Seguro de Vida" />}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.slideseguros}>
              <OpenModal
                estilo="botaoModal"
                imagemBtn={House}
                tituloBtn="Seguro Residencial"
                form={<FormGeral titulo="Cotação Seguro Residencial" />}
              />
              <OpenModal
                estilo="botaoModal"
                imagemBtn={People}
                tituloBtn="Affinity"
                form={<FormGeral titulo="Cotação Seguro Affinity" />}
              />
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
