// CSS
import styles from './Blog.module.css';
// Components
import Breadcrumbs from "../components/Breadcrumb/Breadcrumbs";

const Blog = () => {
  return (
    <section>
      <Breadcrumbs titulo="Título do Post" />
      <section className={styles.post}>
        <h1>Teste</h1>
      </section>
    </section>
  )
}

export default Blog
