import styles from '../styles/MidCard.module.scss'
import Image from 'next/image'
import agent from '../public/agent_smith.jpg'

const MidCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <Image src={agent} width={75} height={75} />
      </div>
      <div className={styles.review}>
        <p className={styles.name}>Agent Smith</p>
        <p className={styles.text}>
          Отличная мастерская, быстро работают, хорошая доставка, приемлемая цена!
        </p>
      </div>
    </div>
  )
}

export default MidCard
