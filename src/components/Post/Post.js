import React from 'react'
// CSS
import styles from './Post.module.css';
// Components
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";

const Post = () => {
  return (
    <section>
        <Breadcrumbs titulo="Título do Post" />
        <section className={styles.singlePost}>
            <h1>Teste</h1>
        </section>
    </section>
  )
}

export default Post