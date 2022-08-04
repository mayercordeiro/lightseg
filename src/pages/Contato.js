import { useState, useEffect } from "react";
// CSS
import styles from "./Contato.module.css";
// Components
import Breadcrumbs from "../components/Breadcrumb/Breadcrumbs";
import axios from "axios";
// Images
import Endereco from "../assets/images/contatoendereco.svg";
import Email from "../assets/images/contatoemail.svg";
import Telefone from "../assets/images/contatotelefone.svg";
import Destaque from "../assets/images/contatoimg.png";

const Contato = () => {
  const url = "https://lightseg.com.br/lsapi/wp-json/contact-form-7/v1/contact-forms/33/feedback";

  return (
    <section>
      <Breadcrumbs titulo="Contato" />
      <section className={styles.contato}>
        <div className={styles.contatoTexts}>
          <h1>Alguma Dúvida?</h1>
          <p>Fale conosco agora mesmo!</p>
          <img src={Destaque} />
        </div>

        <div className={styles.contatoForm}>
          <h2>
            Estamos felizes em lhe atender. Por favor, entre em contato conosco
            através do formulário abaixo, ou se preferir através dos nossos
            outros meios de comunicação.
          </h2>

          <form>
            <div>
              <input
                id="your_name"
                name="your_name"
                placeholder="Nome"
                type="text"
              />
            </div>
            <div>
              <input
                id="sobrenome"
                name="sobrenome"
                placeholder="Sobrenome"
                type="text"
              />
            </div>
            <div>
              <input
                id="your_email"
                name="your_email"
                placeholder="Email"
                type="email"
              />
            </div>
            <div>
              <input
                id="telefone"
                name="telefone"
                placeholder="Telefone"
                type="tel"
              />
            </div>
            <div id={styles.mensagem}>
              <textarea
                id="your_message"
                name="your_message"
                rows="5"
                cols="50"
                placeholder="Digite sua mensagem"
              ></textarea>
            </div>
            <div className={styles.btn_enviar}>
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </section>
      {/* INFORMAÇÕES DE CONTATO */}
      <div className={styles.infos}>
        <div className={styles.infosContainer}>
          <div className={styles.infosImg}>
            <img src={Endereco} alt="" srcset="" />
          </div>
          <div className={styles.infosTexts}>
            <h2>Nosso Endereço:</h2>
            <p>Tv. da Lapa, 90, Conjunto 131</p>
            <p>Curitiba / Paraná</p>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.infosImg}>
            <img src={Email} alt="" srcset="" />
          </div>
          <div className={styles.infosTexts}>
            <h2>Email:</h2>
            <p>halisson@lightseg.com.br</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.infosImg}>
            <img src={Telefone} alt="" srcset="" />
          </div>
          <div className={styles.infosTexts}>
            <h2>Telefone:</h2>
            <p>+55 (41) 99274-3680</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
