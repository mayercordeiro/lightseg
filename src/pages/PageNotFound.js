import React from 'react'
// Router
import { NavLink } from "react-router-dom";
// CSS
import styles from './PageNotFound.module.css'
// Images
import notFound from '../assets/images/404.svg';

const PageNotFound = () => {
  return (
    <section className={styles.notFound}>
        <h1>Parece que você está perdido no espaço!</h1>
        <img src={notFound} />
        <div className={styles.VoltarIniciaBotao}>
            <NavLink to="/">Voltar à Página Inicial</NavLink>
          </div>
    </section>
  )
}

export default PageNotFound