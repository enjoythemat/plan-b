import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Main from '../components/Main'

const Home = () => (
  <div className={styles.wrapper}>
    <Head>
      <title>Test Name Company</title>
    </Head>
    <Main />
  </div>
)

export default Home
