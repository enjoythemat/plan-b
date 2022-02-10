import styles from '../../styles/services/ServiceCard.module.scss'

const ServiceCard = ({ title, pic, delay }) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url("${pic}")`,
        animationDelay: `${delay}s`
      }}>
      <p>{title}</p>
    </div>
  )
}

export default ServiceCard
