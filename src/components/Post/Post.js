import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// CSS
import styles from "./Post.module.css";
// Components
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
// Images
import Clock from "../../assets/images/clock.svg";
import Loading from "../../assets/images/loading.svg";

const Post = () => {
  const { id } = useParams();
  const url = `https://lightseg.com.br/lsapi/wp-json/wp/v2/artigos/${id}`;
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fecthData() {
      setLoading(true);

      const res = await fetch(url);
      const data = await res.json();
      setPost(data);

      setLoading(false);
    };

    fecthData();
  }, []);

  return (
    <section>
      <Breadcrumbs titulo={post.title?.rendered} />
      {loading && (
        <div className={styles.loading}>
          <img src={Loading} />
        </div>
      )}
      <section className={styles.singlePost}>
        <div className={styles.post_left}>
          <div
            className={styles.post_imagem}
            style={{ backgroundImage: `url('${post.acf?.imagem?.url}')` }}
          ></div>
          <div className={styles.data}>
            <img src={Clock} />
            <p>{post.acf?.data}</p>
          </div>
        </div>

        <div className={styles.post_right}>
          <div
            dangerouslySetInnerHTML={{ __html: `${post.content?.rendered}` }}
          />
        </div>
      </section>
    </section>
  );
};

export default Post;
