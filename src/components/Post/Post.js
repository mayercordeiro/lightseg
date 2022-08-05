import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// CSS
import styles from "./Post.module.css";
// Components
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
import axios from "axios";

const Post = () => {
  const { id } = useParams();
  const url = `https://lightseg.com.br/lsapi/wp-json/wp/v2/artigos/${id}`;
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fecthData() {
      const res = await fetch(url);

      const data = await res.json();

      setPost(data);
    }
    fecthData();
  }, []);

  console.log(post);

  return (
    <section>
      <Breadcrumbs titulo={post.title?.rendered} />
      <section className={styles.singlePost}>
        <p>ID do Post: {id}</p>
        <p>ID do Post: {post.link}</p>
        <p>ID do Post: {post.acf?.resumo}</p>
      </section>
    </section>
  );
};

export default Post;
