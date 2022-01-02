import Image from 'next/image'
import Navbar from './Navbar'
import styles from '../styles/Header.module.scss'

const Header = ({ menuClickHandler, menuIsOpen }) => {

  return (
    <div className={styles.header} onClick={menuClickHandler}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image src="/logo-2.png" width={120} height={23} alt={'Мастерская План Б'} />
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
