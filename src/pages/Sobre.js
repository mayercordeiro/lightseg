import React, { useState } from "react";
// CSS
import "./Sobre.css";
// Images
import SetaSobre from "../assets/images/setasobre.svg";
// Components
import Breadcrumbs from "../components/Breadcrumb/Breadcrumbs";

const Sobre = () => {

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  return (
    <section>
      <Breadcrumbs titulo="Sobre" />
      <section className="about">
        <div className="about_container_left" data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
          <h1>Você pode confiar em nós para obter o melhor seguro!</h1>

          <div>
            <ul className="about_tabs">
              <li
                className={activeTab === "tab1" ? "about_active" : ""}
                onClick={handleTab1}
              >
                <span>Nossos Valores</span>
              </li>
              <li
                className={activeTab === "tab2" ? "about_active" : ""}
                onClick={handleTab2}
              >
                <span>Missão</span>
              </li>
              <li
                className={activeTab === "tab3" ? "about_active" : ""}
                onClick={handleTab3}
              >
                <span>Objetivo da Empresa</span>
              </li>
            </ul>
          </div>

          <div>
            {activeTab === "tab1" && (
              <div className="about_tabs_textos" data-aos="fade-up" data-aos-once="true">
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
                    <li>
                      Parceria solida com as melhores companhias do mercado;
                    </li>
                  </div>
                  <div className="lista_valores_content">
                    <img src={SetaSobre} />
                    <li>Responsabilidade.</li>
                  </div>
                </ul>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="about_tabs_textos" data-aos="fade-up" data-aos-once="true">
                <p>
                  Proporcionar tranquilidade a nossos clientes, com seguros nas
                  mais variadas modalidades. Oferecendo toda consultoria e
                  soluções necessárias, junto ao nosso time de especialistas.
                </p>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="about_tabs_textos" data-aos="fade-up" data-aos-once="true">
                <p>
                  Trabalhar para oferecer o produto ideal aos nossos clientes,
                  buscar o reconhecimento, como a corretora ideal que busca em
                  cada necessidade, atender de forma equilibrada, o melhor
                  produto, as coberturas ideais e melhor custo.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="about_container_right" data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
          <p>
            Criada para atender especialmente produtos empresariais, com foco
            principalmente em{" "}
            <span className="textobold">seguros para transporte de cargas</span>. A corretora deu início nas suas atividades somando duas forças, de um lado, um sócio que atuou por 26 anos dentro das maiores companhias seguradoras do mercado, do outro, a força e tradição da corretora <span className="textobold">HH Vicentin</span>, que a mais de 25 anos é reconhecida e consolidada no mercado segurador, sempre oferecendo e atendendo todas as modalidades de seguros. Esta somatória, o resultado do conhecimento das duas figuras, seguradora e corretora, <span className="textobold">torna nosso maior diferencial</span>. Unimos o conhecimento, o relacionamento e a experiência adquirida nos processos internos de uma companhia de seguro, com expertise comercial de uma das corretoras mais tradicionais, forte e sólida do mercado brasileiro.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Sobre;
