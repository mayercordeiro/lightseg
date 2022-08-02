// CSS
import styles from "./Contato.module.css";
// Components
import Breadcrumbs from "../components/Breadcrumb/Breadcrumbs";
// Images
import Endereco from "../assets/images/contatoendereco.svg";
import Email from "../assets/images/contatoemail.svg";
import Telefone from "../assets/images/contatotelefone.svg";
import Destaque from "../assets/images/contatoimg.png";
import { useState } from "react";

const Contato = () => {

  const [nome, setNome] = useState();
  const [sobreNome, setSobreNome] = useState();
  const [email, setEmail] = useState();

  console.log(`Nome: ${nome}, Sobrenome: ${sobreNome}, Email: ${email}`);

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
                id="nome"
                name="nome"
                placeholder="Nome"
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div>
              <input
                id="sobrenome"
                name="sobrenome"
                placeholder="Sobrenome"
                type="text"
                required
                value={sobreNome}
                onChange={(e) => setSobreNome(e.target.value)}
              />
            </div>
            <div>
              <input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="telefone"
                name="telefone"
                placeholder="Telefone"
                type="tel"
                required
              />
            </div>
            <div id={styles.mensagem}>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="5"
                cols="50"
                placeholder="Digite sua mensagem"
                required
              ></textarea>
            </div>
            <div className={styles.btn_enviar}>
              <input type="submit" value="Enviar" />
            </div>
            <input type="hidden" name="_next" value="https://uol.com.br"></input>
            <input type="hidden" name="_captcha" value="false"></input>
          </form>
        </div>
      </section>

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
