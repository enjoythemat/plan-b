import styles from '../styles/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faVk } from '@fortawesome/free-brands-svg-icons'

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
          <ul>
            <li>Главная</li>
            <li>Наши работы</li>
            <li>Доставка</li>
            <li>О компании</li>
            <li>Контакты</li>
          </ul>
        </div>

        <div className={styles.request}>
          <p>Закажите обратный звонок</p>
          <form action="post">
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="Ваш телефон" />
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
