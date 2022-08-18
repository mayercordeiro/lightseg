// Hooks
import { useFetch } from "../hooks/useFetch";
// CSS
import styles from "./Blog.module.css";
// Router
import { NavLink } from "react-router-dom";
// Components
import Breadcrumbs from "../components/Breadcrumb/Breadcrumbs";
// Loading
import Loading from "../assets/images/loading.svg";

const Blog = () => {

  const url = "https://lightseg.com.br/lsapi/wp-json/wp/v2/artigos";
  const { data, loading } = useFetch(url);

  return (
    <section>
      <Breadcrumbs titulo="Blog" />
      <section className={styles.container}>
        {loading && (
          <div className={styles.loading}>
            <img src={Loading} />
          </div>
        )}
        <section className={styles.posts} data-aos="fade-right" data-aos-once="true" data-aos-delay="400">
          {data &&
            data.map((item) => (
              <article key={item.id} className={styles.post_container}>
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
                  <time className={styles.data}>{item.acf.data}</time>
                  <div>
                    <NavLink
                      className={styles.leiamais}
                      to={`/post/${item.id}`}
                    >
                      Leia +
                    </NavLink>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </section>
    </section>
  );
};

export default Blog;
