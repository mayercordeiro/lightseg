import { useState, useEffect } from "react";
import axios from "axios";
// CSS
import styles from "./Contato.module.css";
// Components
import Breadcrumbs from "../components/Breadcrumb/Breadcrumbs";
// Images
import Endereco from "../assets/images/contatoendereco.svg";
import Email from "../assets/images/contatoemail.svg";
import Telefone from "../assets/images/contatotelefone.svg";
import Destaque from "../assets/images/contatoimg.png";
import Check from "../assets/images/check.svg";
import Error from "../assets/images/error.svg";
import ImageLoading from "../assets/images/loading.svg";

const Contato = () => {
  const url =
    "https://lightseg.com.br/lsapi/wp-json/contact-form-7/v1/contact-forms/33/feedback/";

  const [yourname, setYourname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  let formData = new FormData();
  formData.append("yourname", yourname);
  formData.append("surname", surname);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("message", message);

  const config = {
    method: "POST",
    headers: { "content-type": "multipart/form-data" },
  };

  // Email Messages
  const [displaySucess, setDisplaySucess] = useState(true);
  const [displayError, setDisplayError] = useState(true);

  // Loading
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setButton(false);
    axios
      .post(url, formData, config)
      .then((response) => {
        setDisplaySucess(false);
        // Reset Fields
        setYourname("");
        setSurname("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        setDisplayError(false);
        // Reset Fields
        setYourname("");
        setSurname("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .finally(() => {
        setLoading(false);
        setButton(true);
      });
  };

  return (
    <section>
      <Breadcrumbs titulo="Contato" />
      <section className={styles.contato}>
        <div className={styles.contatoTexts} data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
          <h1>Alguma Dúvida?</h1>
          <p>Fale conosco agora mesmo!</p>
          <img src={Destaque} />
        </div>

        <div className={styles.contatoForm} data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
          <h2>
            Estamos felizes em lhe atender. Por favor, entre em contato conosco
            através do formulário abaixo, ou se preferir através dos nossos
            outros meios de comunicação.
          </h2>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="yourname"
                name="yourname"
                value={yourname}
                placeholder="Nome"
                type="text"
                onChange={(e) => setYourname(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                id="surname"
                name="surname"
                value={surname}
                placeholder="Sobrenome"
                type="text"
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                id="phone"
                name="phone"
                value={phone}
                placeholder="Telefone"
                type="tel"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div id={styles.mensagem}>
              <textarea
                id="message"
                name="message"
                value={message}
                rows="5"
                cols="50"
                placeholder="Digite sua mensagem"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            {/* LOADING */}
            <div className={loading ? styles.loadingTrue : styles.loading}>
              <img src={ImageLoading} />
            </div>
            {/* LOADING */}
            <div className={button ? styles.btn_enviar : styles.btn_enviarOff}>
              <input type="submit" value="Enviar" />
            </div>

            <div
              className={`${styles.sucess} ${
                displaySucess ? styles.displaySucess : ""
              }`}
            >
              <div>
                <img src={Check} />
              </div>
              <div>
                <p>Agradecemos a sua mensagem, logo retornaremos.</p>
              </div>
            </div>

            <div
              className={`${styles.error} ${
                displayError ? styles.displayError : ""
              }`}
            >
              <div>
                <img src={Error} />
              </div>
              <div>
                <p>
                  Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente
                  mais tarde.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* INFORMAÇÕES DE CONTATO */}
      <div className={styles.infos} data-aos="fade-right" data-aos-once="true">
        <div className={styles.infosContainer}>
          <div className={styles.infosImg}>
            <img src={Endereco} />
          </div>
          <div className={styles.infosTexts}>
            <h2>Nosso Endereço:</h2>
            <a href="https://goo.gl/maps/qy7hSAxKTcKGvgyd8">Tv. da Lapa, 96, Conjunto 131</a>
            <p>Curitiba / Paraná</p>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.infosImg}>
            <img src={Email} />
          </div>
          <div className={styles.infosTexts}>
            <h2>Email:</h2>
            <a
              href="mailto:halisson@lightseg.com.br"
            >
              halisson@lightseg.com.br
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.infosImg}>
            <img src={Telefone} />
          </div>
          <div className={styles.infosTexts}>
            <h2>Telefone:</h2>
            <a href="tel:+5541992743680">+55 (41) 99274-3680</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
