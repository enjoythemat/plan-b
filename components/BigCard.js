import styles from '../styles/BigCard.module.scss'

const BigCard = ({ title, subTitle }) => {

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url("/back-2.jpg")` }}
    >
      {/*<div className={styles.info}>*/}
      {/*  <h1>Мастерская План Б</h1>*/}
      {/*  <h2>Лазерная резка и гравировка по строгому соблюдению нормативов</h2>*/}
      {/*</div>*/}
    </div>
  )
}

export default BigCard
