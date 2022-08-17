import { useEffect } from "react";
// CSS
import './Breadcrumbs.css';
// Components
import AOS from 'aos';


const Breadcrumbs = (props) => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <section id={props.tituloBlog} className="breadcrumb">
        <h1 data-aos="zoom-in" data-aos-once="true">{props.titulo}</h1>
    </section>
  )
}

export default Breadcrumbs