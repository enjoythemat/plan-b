import styles from '../../styles/services/ServiceCard.module.scss'

const ServiceCard = ({ title, subTitle, pic, delay }) => {
  return (
    <div>
      <p className={styles.subTitle}>{subTitle}</p>
      <div
        className={styles.card}
        style={{
          backgroundImage: `url("${pic}")`,
          animationDelay: `${delay}s`
        }}>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default ServiceCard
