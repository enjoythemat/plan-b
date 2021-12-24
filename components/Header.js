import Image from 'next/image'
import styles from '../styles/Header.module.scss'

const Header = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <Image src="/logo-1.png" width={125} height={60} />
        </div>

        <div className={styles.request}>
          <p>Оставить заявку</p>
        </div>

        <div className={styles.contact}>
          <p>г. Пермь, ул. Героев Хасана, к. 70</p>
          <p>+7 (904) 848-87-07</p>
        </div>
      </div>
    </div>
  )
}

export default Header
