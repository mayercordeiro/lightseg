// CSS
import styles from './Home.module.css'
// Components
import HomeStart from '../components/HomeStart/HomeStart'
import Intro from '../components/Intro/Intro'
import Why from '../components/Why/Why'
import HomeBlog from '../components/Blog/HomeBlog'

const Home = () => {
  return (
    <main className={styles.main}>
      <HomeStart />
      <Intro />
      <Why />
      <HomeBlog />
    </main>
  )
}

export default Home