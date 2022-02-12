import Head from 'next/head'
import Poster from '../components/poster/Poster'
import Services from '../components/services/Services'
import About from '../components/about/About'
import HowToWork from '../components/howToWork/HowToWork'
import City from '../components/city/City'
import Reviews from '../components/reviews/Reviews'
import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Мастерская План Б</title>
      </Head>

      <Poster />
      <Services />
      <About />
      <HowToWork />
      <City />
      <Reviews />
    </div>
  )
}

export default Home
