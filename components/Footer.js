import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faVk } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Footer.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.wrapper}>

      <div className={styles.head}>
        <div className={styles.logo}>
          <h2>©2022. План Б</h2>
          <p>Лазерная резка и гравировка</p>
          <ul>
            <li><FontAwesomeIcon icon={faMapMarker} /> г. Пермь, ул. Героев Хасана, к. 70</li>
            <li><FontAwesomeIcon icon={faPhone} /> +7 (904) 848-87-07</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> plan_b_perm@mail.ru</li>
            <li><FontAwesomeIcon icon={faInstagram} /> /laserplanb</li>
            <li><FontAwesomeIcon icon={faVk} /> /laserplanb</li>
          </ul>
        </div>

        <div className={styles.nav}>
          <h2>Навигация</h2>
          <ul>
            <li>
              <Link href={'/'}>
                <a>Главная</a>
              </Link>
            </li>
            <li>
              <Link href={'/album'}>
                <a>Галерея работ</a>
              </Link>
            </li>
            <li>
              <Link href={'/shipping'}>
                <a>Доставка</a>
              </Link>
            </li>
            <li>
              <Link href={'/about'}>
                <a>О компании</a>
              </Link>
            </li>
            <li>
              <Link href={'/contacts'}>
                <a>Контакты</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.request}>
          <h2>Закажите обратный звонок</h2>
          <form action="post">
            <input type="text" placeholder="Ваше имя *" />
            <input type="text" placeholder="Ваш телефон *" />
            <button>Отправить</button>
          </form>
        </div>
      </div>

      <div className={styles.foot}>
        <p>© Plan B 2022. Все права защищены.</p>
        <p>Политика в отношении обработки персональных данных</p>
      </div>
    </div>
  </div>
)

export default Footer
