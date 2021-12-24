import styles from '../styles/Heading.module.scss'

const Heading = ({ title, subTitle = '' }) => (
  <div className={styles.heading}>
    <p className={styles.title}>{title}</p>
    <p className={styles.subtitle}>{subTitle}</p>
  </div>
)

export default Heading
