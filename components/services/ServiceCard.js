import styles from '../../styles/services/ServiceCard.module.scss'

const ServiceCard = ({ title, pic }) => {
  return (
    <div className={styles.card} style={{backgroundImage: `url("${pic}")`}}>
      <p>{title}</p>
    </div>
  )
}

export default ServiceCard
