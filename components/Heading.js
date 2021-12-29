import styles from '../styles/Heading.module.scss'

const Heading = ({ title, subTitle = '', pos = '' }) => {
  let style

  if (pos) {
    style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }

  return (
    <div className={styles.heading} style={style}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subTitle}</p>
    </div>
  )
}

export default Heading
