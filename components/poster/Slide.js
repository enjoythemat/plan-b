import styles from '../../styles/poster/Slide.module.scss'

const Slide = ({ id }) => (
  <div
    className={styles.card}
    style={{ backgroundImage: `url("/back-${id}.jpg")` }}
  >
    <h1>Лазерная резка</h1>
  </div>
)

export default Slide
