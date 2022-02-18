import styles from '../../styles/poster/Slide.module.scss'

const Slide = ({ id }) => (
  <div
    className={styles.card}
    style={{ backgroundImage: `url("/back-${id}.jpg")` }}
  >
    <span className={styles.blur} />
    <div className={styles.text}>
      <h1>Лазерная резка и гравировка</h1>
      <p>«План Б» — это Пермская мастерская, объединяющая все ключевые изделия из дерева и
        металла для дома и бизнеса</p>
    </div>
  </div>
)

export default Slide
