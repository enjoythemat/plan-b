import styles from '../../styles/poster/Slide.module.scss'

const Slide = ({ id }) => (
  <div
    className={styles.card}
    style={{ backgroundImage: `url("/back-${id}.jpg")` }}
  />
)

export default Slide
