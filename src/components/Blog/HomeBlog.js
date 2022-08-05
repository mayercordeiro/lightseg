// Hooks
import { useFetch } from "../../hooks/useFetch";
// CSS
import styles from "./HomeBlog.module.css";
// Router
import { NavLink } from "react-router-dom";
// Images
import Loading from "../../assets/images/loading.svg";

const HomeBlog = () => {
  const url = "https://lightseg.com.br/lsapi/wp-json/wp/v2/artigos";
  const { data, loading } = useFetch(url);

  return (
    <section className={styles.blog}>
      <div className={styles.blog_header}>
        <h3>Últimas News, Posts e Artigos</h3>
        <NavLink to="/blog">
          <span id={styles.todos}>Ver Todos</span>
        </NavLink>
      </div>
      {loading && (
        <div className={styles.loading}>
          <img src={Loading} />
        </div>
      )}
      <section className={styles.posts}>
        {data &&
          data.slice(0, 3).map((item) => (
            <div key={item.id} className={styles.post_container}>
              <div
                className={styles.post_imagem}
                style={{ backgroundImage: `url('${item.acf.imagem.url}')` }}
              ></div>
              <div className={styles.post_content}>
                <div className={styles.post_title}>
                  <NavLink to={`/post/${item.id}`}>
                    <h1>{item.title.rendered}</h1>
                  </NavLink>
                </div>
                <p>{item.acf.resumo}</p>
              </div>
              <div className={styles.post_infos}>
                <div className={styles.data}>{item.acf.data}</div>
                <div>
                  <NavLink className={styles.leiamais} to={`/post/${item.id}`}>
                    Leia +
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        <div className={styles.VerTodosBotao}>
          <NavLink to="/blog">Ver Todos</NavLink>
        </div>
      </section>
    </section>
  );
};

export default HomeBlog;
