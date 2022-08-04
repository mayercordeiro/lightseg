import { useState, useEffect } from "react";
// CSS
import styles from "./Blog.module.css";
// Components
import Breadcrumbs from "../components/Breadcrumb/Breadcrumbs";
import axios from "axios";

const Blog = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      `https://lightseg.com.br/lsapi/wp-json/wp/v2/artigos`
    );
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <Breadcrumbs titulo="Blog" />
      <section className={styles.post}>
        {data.map((item) => (
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
      </section>
    </section>
  );
};

export default Blog;
