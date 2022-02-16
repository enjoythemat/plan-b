import Head from 'next/head'
import Poster from '../components/poster/Poster'
import Services from '../components/services/Services'
import Company from '../components/company/Company'
import HowToWork from '../components/howToWork/HowToWork'
import City from '../components/city/City'
import Reviews from '../components/reviews/Reviews'
import styles from '../styles/PAGES/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Мастерская PLAN B</title>
      </Head>

      <Poster />
      <Services />
      <Company />
      <HowToWork />
      <City />
      <Reviews />
    </div>
  )
}

export default Home
