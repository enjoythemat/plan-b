import styles from '../styles/BigCard.module.scss'

const BigCard = ({ id }) => {

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url("/back-${id}.jpg")` }}
    >
      {/*<div className={styles.info}>*/}
      {/*  <h1>Мастерская План Б</h1>*/}
      {/*  <h2>Лазерная резка и гравировка по строгому соблюдению нормативов</h2>*/}
      {/*</div>*/}
    </div>
  )
}

export default BigCard
