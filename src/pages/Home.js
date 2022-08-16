// CSS
import styles from './Home.module.css'
// Components
import HomeStart from '../components/HomeStart/HomeStart'
import Why from '../components/Why/Why'
import HomeBlog from '../components/Blog/HomeBlog'
import IntroSeguros from '../components/IntroSeguros/IntroSeguros'

const Home = () => {
  return (
    <section className={styles.main}>
      <HomeStart />
      <IntroSeguros />
      <Why />
      <HomeBlog />
    </section>
  )
}

export default Home