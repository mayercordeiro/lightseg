// Router
import { NavLink } from "react-router-dom";
// CSS
import styles from "./Why.module.css";
// Images
import Um from "../../assets/images/why1.svg";
import Dois from "../../assets/images/why2.svg";
import Tres from "../../assets/images/why3.svg";
// Modules
import CountUp from "react-countup";

const Why = () => {
  return (
    <section>
      <h1 className={styles.whyh1}>Por que a LightSeg?</h1>
      <h2 className={styles.whyh2}>Sempre encontrando o melhor negócio!</h2>
      <section className={styles.container}>
        <section className={styles.why}>
          <div className={styles.um}>
            <div className={styles.whyContent}>
              <img src={Um} loading="lazy" />
              <h3>O Melhor Serviço</h3>
            </div>
            <div className={styles.gridP}>
              <p className={styles.whyContentText}>
                Serviço completo, possuímos acesso aos produtos e serviços das
                melhor seguradoras. Cada cliente tem suas próprias necessidades
                de seguros, oferecemos a cobertura especificamente projetada
                para melhor cobrir seus riscos individuais.
              </p>
            </div>
          </div>
          <div>
            <div className={styles.whyContent}>
              <img src={Dois} loading="lazy" />
              <h3>O Melhor Valor</h3>
            </div>
            <div className={styles.gridP}>
              <p className={styles.whyContentText}>
                Com nossa experiência de mais de 25 anos no mercado, temos o
                domínio para oferecer a sua empresa o seguro ideal, ao mesmo
                tempo em que controlamos seus custos, gerando maior
                competitividade para nossos clientes.
              </p>
            </div>
          </div>
          <div>
            <div className={styles.whyContent}>
              <img src={Tres} loading="lazy" />
              <h3>A Melhor Experiência</h3>
            </div>
            <div className={styles.gridP}>
              <p className={styles.whyContentText}>
                Não importa o tamanho ou as necessidades de sua empresa, podemos
                fornecer a mesma cobertura e serviço de qualidade, sempre com
                alto nível apropriado para sua empresa e personalizado para as
                suas necessidades e tamanho.
              </p>
            </div>
          </div>
        </section>
      </section>

      <div className={styles.contadores}>
        <div className={styles.contadoresContent}>
          <span className={styles.contadoresLine1}>Mais de</span>
          <CountUp
            className={styles.contadoresLine2}
            end={4000}
            startOnMount="true"
            enableScrollSpy="true"
            duration={1}
            separator={"."}
          />
          <span className={styles.contadoresLine3}>Clientes Segurados</span>
        </div>
        <div className={styles.contadoresContent}>
          <span className={styles.contadoresLine1}>Mais de</span>
          <CountUp
            className={styles.contadoresLine2}
            end={50000}
            duration={1.5}
            separator={"."}
          />
          <span className={styles.contadoresLine3}>Cargas Transportadas</span>
        </div>
        <div className={styles.contadoresContent}>
          <span className={styles.contadoresLine1}>Clientes</span>
          <CountUp
            className={styles.contadoresLine2}
            end={100}
            duration={2}
            separator={"."}
            suffix={"%"}
          />
          <span className={styles.contadoresLine3}>Satisfeitos</span>
        </div>
        <div className={styles.contadoresBotao}>
          <NavLink to="/sobre">Leia Mais Sobre Nós</NavLink>
        </div>
      </div>
    </section>
  );
};

export default Why;
