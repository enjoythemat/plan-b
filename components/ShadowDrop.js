import styles from '../styles/ShadowDrop.module.scss'

const ShadowDrop = ({ children, shadowHandler }) => {
  return (
    <div className={styles.shadow} onClick={shadowHandler}>
      {children}
    </div>
  )
}

export default ShadowDrop
