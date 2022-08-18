// CSS
import './Breadcrumbs.css';

const Breadcrumbs = (props) => {

  return (
    <section id={props.tituloBlog} className="breadcrumb">
        <h1 data-aos="zoom-in" data-aos-once="true">{props.titulo}</h1>
    </section>
  )
}

export default Breadcrumbs