import Image from 'next/image'
import styles from '../styles/Header.module.scss'
import Navbar from './Navbar'

const Header = ({ menuClickHandler, menuIsOpen }) => {

  return (
    <div className={styles.wrapper} onClick={menuClickHandler}>
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

      {menuIsOpen ? <Navbar menuIsOpen={menuIsOpen} /> : null}

      <div className={styles.button}>
        <Image src={menuIsOpen ? "/menu-exit.svg" : "/menu.svg"} width={50} height={50} />
      </div>
    </div>
  )
}

export default Header
