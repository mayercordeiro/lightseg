// CSS
import Breadcrumbs from "../components/Breadcrumb/Breadcrumbs";
import "./Sobre.css";
// Images
import SetaSobre from "../assets/images/setasobre.svg";
// Tabs
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// Components

import Instagram from "../assets/images/instagram.svg";

const Sobre = () => {
  return (
    <section>
      <Breadcrumbs titulo="Sobre" />
      <section className="about">
        <div className="about_missao">
          <h1>
            Você pode confiar em nós para obter o melhor seguro!
          </h1>
          <Tabs
            id="uncontrolled-tab-example"
            className="sobre_tab"
            defaultActiveKey="home"
          >
            <Tab eventKey="home" title="Nossos Valores">
              <div className="tabs_textos">
                <ul className="lista_valores">
                  <div className="lista_valores_content">
                    <img src={SetaSobre} />
                    <li>Time de colaboradores dedicados;</li>
                  </div>
                  <div className="lista_valores_content">
                    <img src={SetaSobre} />
                    <li>Honestidade;</li>
                  </div>
                  <div className="lista_valores_content">
                    <img src={SetaSobre} />
                    <li>Ética;</li>
                  </div>
                  <div className="lista_valores_content">
                    <img src={SetaSobre} />
                    <li>Parceria solida com as melhores companhias do mercado;</li>
                  </div>
                  <div className="lista_valores_content">
                    <img src={SetaSobre} />
                    <li>Responsabilidade.</li>
                  </div>
                </ul>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Missão">
              <div className="tabs_textos">
                <p>
                  Proporcionar tranquilidade a nossos clientes, com seguros nas
                  mais variadas modalidades. Oferecendo toda consultoria e
                  soluções necessárias, junto ao nosso time de especialistas.
                </p>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Objetivo da Empresa">
              <div className="tabs_textos">
                <p>
                  Trabalhar para oferecer o produto ideal aos nossos clientes,
                  buscar o reconhecimento, como a corretora ideal que busca em
                  cada necessidade, atender de forma equilibrada, o melhor
                  produto, as coberturas ideais e melhor custo.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>

        <div className="sobre">
          <p className="sobre_texto">
            Criada para atender especialmente produtos empresariais e foco
            principalmente em <span className="textobold">seguros para transporte de cargas</span>. A corretora deu início nas suas atividades somando duas forças, de um lado, um sócio com o conhecimento nos processos operacionais interno de uma seguradora, do outro, a força e tradição da corretora <span className="textobold">HH Vicentin</span>, que a mais de 25 anos é reconhecida e consolidada no mercado segurador, sempre oferecendo e atendendo todas as modalidades de seguros. Esta somatória, o resultado do conhecimento das duas figuras, seguradora e corretora, <span className="textobold">torna nosso maior diferencial.</span> Unimos o conhecimento, o relacionamento e a experiencia adquirida nos processos internos de uma Companhia de seguro, com expertise comercial de uma das corretoras mais tradicionais, forte e sólida do mercado brasileiro.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Sobre;
