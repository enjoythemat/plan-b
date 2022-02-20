import Image from 'next/image'
import styles from '../../styles/reviews/ReviewCard.module.scss'

const ReviewCard = ({ avatar, name, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <Image src={avatar} width={75} height={75} />
      </div>

      <div className={styles.review}>
        <p className={styles.name}>{name}</p>
        <p className={styles.rating}>⭐⭐⭐⭐⭐</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}

export default ReviewCard
