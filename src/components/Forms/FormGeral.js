import { useState } from "react";
import axios from "axios";
// CSS
import styles from "./FormGeral.module.css";
// Images
import Check from "../../assets/images/check.svg";
import Error from "../../assets/images/error.svg";
import ImageLoading from "../../assets/images/loading.svg";

const FormGeral = (props) => {
  const url =
    "https://lightseg.com.br/lsapi/wp-json/contact-form-7/v1/contact-forms/56/feedback/";

  const [yourname, setYourname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  let formData = new FormData();
  formData.append("yoursubject", props.titulo);
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
      <section className={styles.contato}>
        <div className={styles.header}>
          <h2>{props.titulo}</h2>
          <p>
            Preencha seus dados abaixo que logo retornaremos para lhe oferecer o
            melhor seguro.
          </p>
        </div>

        <div className={styles.contatoForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputOculto}>
              <input
                id="yoursubject"
                name="yoursubject"
                value={props.titulo}
                type="text"
              />
            </div>
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
                placeholder="Gostaria de acrescentar alguma informação?"
                onChange={(e) => setMessage(e.target.value)}
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
    </section>
  );
};

export default FormGeral;
