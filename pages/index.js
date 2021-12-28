import Head from 'next/head'
import Main from '../components/Main'
import styles from '../styles/Home.module.scss'

const Home = () => (
  <div className={styles.wrapper}>
    <Head>
      <title>Test Name Company</title>
    </Head>
    <Main />
  </div>
)

export default Home
