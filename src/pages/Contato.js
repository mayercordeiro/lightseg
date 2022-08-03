import { useState } from "react";
// CSS
import styles from "./Contato.module.css";
// Components
import Breadcrumbs from "../components/Breadcrumb/Breadcrumbs";
// Images
import Endereco from "../assets/images/contatoendereco.svg";
import Email from "../assets/images/contatoemail.svg";
import Telefone from "../assets/images/contatotelefone.svg";
import Destaque from "../assets/images/contatoimg.png";

const Contato = () => {
  const stripHtml = (string) => string.replace(/(<([^>]+)>)/gi, "");

  const normalizeResponse = (url, response) => {
      if (
          url.match(/wp-json\/contact-form-7\/v1\/contact-forms\/\d+\/feedback/)
      ) {
          return normalizeContactForm7Response(response);
      }
  
      if (url.match(/wp-json\/gf\/v2\/forms\/\d+\/submissions/)) {
          return normalizeGravityFormsResponse(response);
      }
  
      return {
          isSuccess: false,
          message: "Are you submitting to the right URL?",
          validationError: {}
      };
  };
  
  const normalizeGravityFormsResponse = (response) => {
      const isSuccess = response.is_valid;
      const message = isSuccess
          ? stripHtml(response.confirmation_message)
          : "There was a problem with your submission.";
      const validationError = isSuccess
          ? {}
          : Object.fromEntries(
                Object.entries(
                    response.validation_messages
                ).map(([key, value]) => [`input_${key}`, value])
            );
  
      return {
          isSuccess,
          message,
          validationError
      };
  };
  
  const normalizeContactForm7Response = (response) => {
      const isSuccess = response.status === "mail_sent";
      const message = response.message;
      const validationError = isSuccess
          ? {}
          : Object.fromEntries(
                response.invalid_fields.map((error) => {
                    const key = /cf7[-a-z]*.(.*)/.exec(error.into)[1];
  
                    return [key, error.message];
                })
            );
  
      return {
          isSuccess,
          message,
          validationError
      };
  };
  
  const formSubmissionHandler = (event) => {
      event.preventDefault();
  
      const formElement = event.target,
          { action, method } = formElement,
          body = new FormData(formElement);
  
      fetch(action, {
          method,
          body
      })
          .then((response) => response.json())
          .then((response) => normalizeResponse(action, response))
          .then((response) => {
              alert(response.message);
  
              if (response.isSuccess) {
                  formElement.reset();
              }
          })
          .catch((error) => {
              alert("Check the console for the error details.");
              console.log(error);
          });
  };
  
  const formElements = document.querySelectorAll("form");
  
  formElements.forEach((formElement) =>
      formElement.addEventListener("submit", formSubmissionHandler)
  );
  

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
          <form
            action="https://lightseg.com.br/lsapi/wp-json/contact-form-7/v1/contact-forms/33/feedback"
            method="post"
          >
            <div>
              <input
                id="your-name"
                name="your-name"
                placeholder="Nome"
                type="text"
                required
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
                id="your-email"
                name="your-email"
                placeholder="Email"
                type="email"
                required
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
                id="your-message"
                name="your-message"
                rows="5"
                cols="50"
                placeholder="Digite sua mensagem"
                required
              ></textarea>
            </div>
            <div className={styles.btn_enviar}>
              <input type="submit" value="Enviar" />
            </div>
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
