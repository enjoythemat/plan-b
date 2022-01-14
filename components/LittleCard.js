import styles from '../styles/LittleCard.module.scss'

const LittleCard = ({ title, pic }) => {
  return (
    <div className={styles.card} style={{backgroundImage: `url("${pic}")`}}>
      <p>{title}</p>
    </div>
  )
}

export default LittleCard
