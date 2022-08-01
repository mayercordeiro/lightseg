// CSS
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = (props) => {
  return (
    <section className={styles.breadcrumb}>
        <h1>{props.titulo}</h1>
    </section>
  )
}

export default Breadcrumbs