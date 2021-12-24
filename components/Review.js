import styles from '../styles/Review.module.scss'

const Review = ({ pic, name, comment }) => (
  <div className={styles.review}>
    <div className={styles.avatar}>
      <img src={pic} />
    </div>
    <div className={styles.info}>
      <p className={styles.name}>{name}</p>
      <p className={styles.comment}>{comment}</p>
    </div>
  </div>
)

export default Review
