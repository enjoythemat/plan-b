import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/header/Heads.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Heads = ({ menu, menuIconHandler, buttonFormHandler }) => {

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href={'/'}>
            <h1 className={styles.logoText}>PLAN B</h1>
          </Link>
        </div>

        <div className={styles.request} onClick={buttonFormHandler}>
          <p>Оставить заявку</p>
        </div>

        <div className={styles.contact}>
          <p>ул. Героев Хасана 105, к. 70</p>
          <p><FontAwesomeIcon icon={faPhone} /> +7 (904) 848-87-07</p>
        </div>
      </div>

      <div className={styles.button}>
        <Image
          src={menu ? "/menu-exit.svg" : "/menu.svg"}
          width={50}
          height={50}
          alt={'Меню'}
          onClick={menuIconHandler}
        />
      </div>
    </div>
  )
}

export default Heads
