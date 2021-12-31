import styles from '../styles/Heading.module.scss'

const Heading = ({ title, subTitle = '', pos = '' }) => {
  let stylePos
  let styleFont

  if (pos) {
    stylePos = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
    styleFont = {
      fontSize: '40px'
    }
  }

  return (
    <div className={styles.heading} style={stylePos}>
      <p className={styles.title} style={styleFont}>{title}</p>
      <p className={styles.subtitle}>{subTitle}</p>
    </div>
  )
}

export default Heading
