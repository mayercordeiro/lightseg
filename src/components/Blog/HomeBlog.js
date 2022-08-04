import React from "react";
// CSS
import styles from "./HomeBlog.module.css";
// Router
import { NavLink } from "react-router-dom";

class HomeBlog extends React.Component {
  state = {
    artigos: [],
  };

  componentDidMount() {
    fetch("https://lightseg.com.br/lsapi/wp-json/wp/v2/artigos")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          artigos: res,
        });
      });
  }

  render() {
    return (
      <section className={styles.blog}>
        <div className={styles.blog_header}>
          <h3>Últimas News, Posts e Artigos</h3>
          <NavLink to="/blog">
            <span id={styles.todos}>Ver Todos</span>
          </NavLink>
        </div>

        <section className={styles.posts}>
          {this.state.artigos.slice(0, 3).map((item) => (
            <div key={item.id} className={styles.post_container}>
              <div
                className={styles.post_imagem}
                style={{ backgroundImage: `url('${item.acf.imagem.url}')` }}
              ></div>
              <div className={styles.post_content}>
                <div className={styles.post_title}>
                  <h1>{item.title.rendered}</h1>
                </div>
                <p>{item.acf.resumo}</p>
              </div>
              <div className={styles.post_infos}>
                <div className={styles.data}>{item.acf.data}</div>
              </div>
            </div>
          ))}
          <div className={styles.VerTodosBotao}>
            <NavLink to="/blog">Ver Todos</NavLink>
          </div>
        </section>
      </section>
    );
  }
}

export default HomeBlog;
