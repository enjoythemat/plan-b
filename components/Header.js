import Image from 'next/image'
import Navbar from './Navbar'
import styles from '../styles/Header.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Header = ({ menuClickHandler, menuIsOpen }) => {

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          {/*<Image*/}
          {/*  src="/logo-2.png"*/}
          {/*  width={120}*/}
          {/*  height={23}*/}
          {/*  alt={'Мастерская План Б'}*/}
          {/*/>*/}
          <h1 className={styles.logoText}>Мастерская План Б</h1>
        </div>

        <div className={styles.request}>
          <p>Оставить заявку</p>
        </div>

        <div className={styles.contact}>
          <p>ул. Героев Хасана, к. 70</p>
          <p><FontAwesomeIcon icon={faPhone} /> +7 (904) 848-87-07</p>
        </div>
      </div>

      {menuIsOpen
        ? <Navbar
            menuIsOpen={menuIsOpen}
            menuClickHandler={menuClickHandler}
          />
        : null
      }

      <div className={styles.button}>
        <Image
          src={menuIsOpen ? "/menu-exit.svg" : "/menu.svg"}
          width={50}
          height={50}
          alt={'Меню'}
          onClick={menuClickHandler}
        />
      </div>
    </div>
  )
}

export default Header
