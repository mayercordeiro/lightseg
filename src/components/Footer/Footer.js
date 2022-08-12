// Router
import { NavLink } from "react-router-dom";
// CSS
import styles from "./Footer.module.css";
// Images
import LogoFooter from "../../assets/images/logo-footer.svg";
import Instagram from "../../assets/images/instagram.svg";
import Facebook from "../../assets/images/facebook.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <img className={styles.logo} src={LogoFooter} loading="lazy" alt="Logo LightSeg" />
          <div className={styles.text}>
            <p>
              "Proporcionar tranquilidade aos nossos clientes com seguros na
              medida certa."
            </p>
          </div>
        </div>

        <div className={styles.linksUteis}>
          <p className={styles.titulo}>Contato</p>
          <ul className={styles.contact}>
            <li>
              <a
                href="mailto:halisson@lightseg.com.br"
                id={styles.email}
                className={styles.contactIcon}
              >
                halisson@lightseg.com.br
              </a>
            </li>
            <li>
              <a
                href="tel:+5541992743680"
                id={styles.phone}
                className={styles.contactIcon}
              >
                +55 (41) 99274-3680
              </a>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/qy7hSAxKTcKGvgyd8"
                target="_blank"
                id={styles.endereco}
                className={styles.contactIcon}
              >
                Tv. da Lapa, 96, Conjunto 131
              </a>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/qy7hSAxKTcKGvgyd8"
                target="_blank"
                id={styles.enderecoDois}
                className={styles.contactIcon}
              >
                Centro - Curitiba / PR
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.linksUteis}>
          <p className={styles.titulo}>Links Úteis</p>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/seguros">Seguros</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contato">Contato</NavLink>
            </li>
            <li>
              <NavLink to="/seguros">Cote Agora!</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.linksUteis}>
          <p className={styles.titulo}>Seguros</p>
          <ul>
            <li>
              <NavLink to="/seguros">Affinity</NavLink>
            </li>
            <li>
              <NavLink to="/seguros">Auto</NavLink>
            </li>
            <li>
              <NavLink to="/seguros">Residencial</NavLink>
            </li>
            <li>
              <NavLink to="/seguros">Transporte de Cargas</NavLink>
            </li>
            <li>
              <NavLink to="/seguros">Vida</NavLink>
            </li>
          </ul>
        </div>

        <div className={`${styles.linksUteis} ${styles.sigaNos}`}>
          <p className={styles.titulo}>Siga-nos</p>
          <div className={styles.icons}>
            <a href="./">
              <img
                className={styles.socialIcons}
                src={Instagram}
                loading="lazy"
                alt="ícone instagram"
              />
            </a>
            <a href="./">
              <img
                className={styles.socialIcons}
                src={Facebook}
                loading="lazy"
                alt="ícone facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
