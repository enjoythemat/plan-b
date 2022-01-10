import styles from '../styles/BigCard.module.scss'

const BigCard = ({ id }) => {

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url("/back-${id}.jpg")` }}
    >

    </div>
  )
}

export default BigCard
