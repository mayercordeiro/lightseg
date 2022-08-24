import { useState } from "react";
import axios from "axios";
// CSS
import styles from "./FormAuto.module.css";
// Images
import Check from "../../assets/images/check.svg";
import Error from "../../assets/images/error.svg";
import ImageLoading from "../../assets/images/loading.svg";

const FormGeral = (props) => {
  const url =
    "https://lightseg.com.br/lsapi/wp-json/contact-form-7/v1/contact-forms/58/feedback/";

  const [subject, setSubject] = useState("");
  const [yourname, setYourname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [veiculo, setVeiculo] = useState("Selecione");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [message, setMessage] = useState("");

  let formData = new FormData();
  formData.append("yoursubject", props.titulo);
  formData.append("yourname", yourname);
  formData.append("surname", surname);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("nascimento", nascimento);
  formData.append("veiculo", veiculo);
  formData.append("marca", marca);
  formData.append("modelo", modelo);
  formData.append("ano", ano);
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
        setNascimento("");
        setVeiculo("Selecione");
        setMarca("");
        setModelo("");
        setAno("");
        setMessage("");
      })
      .catch((error) => {
        setDisplayError(false);
        // Reset Fields
        setYourname("");
        setSurname("");
        setEmail("");
        setPhone("");
        setNascimento("");
        setVeiculo("Selecione");
        setMarca("");
        setModelo("");
        setAno("");
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
                onChange={(e) => setSubject(e.target.value)}
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
            <div>
              <label htmlFor="nascimento">Data de Nascimento:</label>
              <input
                id="nascimento"
                name="nascimento"
                value={nascimento}
                placeholder="Data de Nascimento"
                type="date"
                onChange={(e) => setNascimento(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="veiculo">Tipo de Veículo:</label>
              <select
                id="veiculo"
                name="veiculo"
                onChange={(e) => setVeiculo(e.target.value)}
                required
                value={veiculo}
              >
                <option value="Selecione" disabled>Selecione</option>
                <option value="Automóvel">Automóvel</option>
                <option value="Caminhão">Caminhão</option>
                <option value="Motocicleta">Motocicleta</option>
              </select>
            </div>
            <div>
              <label htmlFor="marca">Marca do Veículo:</label>
              <input
                id="marca"
                name="marca"
                value={marca}
                type="text"
                onChange={(e) => setMarca(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="modelo">Modelo do Veículo:</label>
              <input
                id="modelo"
                name="modelo"
                value={modelo}
                type="text"
                onChange={(e) => setModelo(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="ano">Ano Modelo do Veículo:</label>
              <input
                id="ano"
                name="ano"
                value={ano}
                type="number"
                onChange={(e) => setAno(e.target.value)}
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
