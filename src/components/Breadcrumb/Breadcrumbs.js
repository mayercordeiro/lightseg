// CSS
import './Breadcrumbs.css';

const Breadcrumbs = (props) => {
  return (
    <section id={props.tituloBlog} className="breadcrumb">
        <h1>{props.titulo}</h1>
    </section>
  )
}

export default Breadcrumbs