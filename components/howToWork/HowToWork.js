import Heading from '../Heading'
import styles from '../../styles/howToWork/HowToWork.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookReader,
  faHandshake,
  faPhoneVolume
} from '@fortawesome/free-solid-svg-icons'

const HowToWork = () => (
  <>
    <Heading
      title="Как мы работаем"
      subTitle="Инструкция по заказу"
    />

    <div className={styles.work}>

      <div className={styles.wrapper}>
        <div className={styles.iconBox}>
          <FontAwesomeIcon icon={faPhoneVolume} className={styles.icon} />
        </div>
        <div className={styles.case}>
          <p className={styles.title}>1) Получение вашей заявки</p>
          <p>
            Вы заполняете небольшую заявку. Это можно сделать по телефону или
            непосредственно на нашем сайте, нажав на кнопку Сделать заказ. Затем
            мы выйдем с Вами на связь. Просто и быстро.
          </p>
        </div>
      </div>

      <div className={styles.wrapper} id={styles.second}>
        <div className={styles.case}>
          <p className={styles.title}>2) Консультация специалиста</p>
          <p>После того, как мы свяжемся Вам будет предложено несколько вариантов
            консультаций. Онлайн - мы зададим все уточняющие вопросы, чтобы
            составить максимально индивидуальный и точечный план работы. Очный -
            классический вариант встречи со специалистом, если Вам так будет
            удобно. Оба варианта несут одинаковое качество. </p>
        </div>
        <div className={styles.iconBox}>
          <FontAwesomeIcon icon={faBookReader} className={styles.icon} />
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.iconBox}>
          <FontAwesomeIcon icon={faHandshake} className={styles.icon} />
        </div>
        <div className={styles.case}>
          <p className={styles.title}>3) Начинаем работу</p>
          <p>После консультации со специалистом Вам сообщается полный план
            работы. А Мастерская План Б приступает к работе. Мы всегда будет
            на связи и готовы выслушать любые дополнительные модификации! </p>
        </div>
      </div>

    </div>
  </>
)

export default HowToWork
