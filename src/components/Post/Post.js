import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// CSS
import styles from "./Post.module.css";
// Components
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
// Images
import Clock from "../../assets/images/clock.svg";
import File from "../../assets/images/file.svg";
import Loading from "../../assets/images/loading.svg";

const Post = () => {
  const { id } = useParams();
  const url = `https://lightseg.com.br/lsapi/wp-json/wp/v2/artigos/${id}`;
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fecthData() {
      const res = await fetch(url);
      const data = await res.json();
      setPost(data);

      setLoading(true);
    }

    fecthData();
  }, []);

  return (
    <section>
      <Breadcrumbs tituloBlog="breadcrumbPosts" titulo={post.title?.rendered} />
      {loading ? (
        <article className={styles.singlePost}>
          <div className={styles.post_left}>
            <div
              className={styles.post_imagem}
              style={{ backgroundImage: `url('${post.acf?.imagem?.url}')` }}
            ></div>
            <div className={styles.data}>
              <img src={File} />
              <p>{post.title?.rendered}</p>
            </div>
            <div className={styles.data}>
              <img src={Clock} />
              <time>{post.acf?.data}</time>
            </div>
          </div>

          <main className={styles.post_right}>
            <div
              dangerouslySetInnerHTML={{ __html: `${post.content?.rendered}` }}
            />
          </main>
        </article>
      ) : 
        <div className={styles.loading}>
          <img src={Loading} />
        </div>
      }
    </section>
  );
};

export default Post;
