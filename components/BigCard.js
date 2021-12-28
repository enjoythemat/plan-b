import styles from '../styles/BigCard.module.scss'

const BigCard = ({ title, subTitle }) => {

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url("/back-2.jpg")` }}
    />
  )
}

export default BigCard
