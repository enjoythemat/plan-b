import Head from 'next/head'
import Heading from '../components/Heading'
import BigCard from '../components/BigCard'
import MidCard from '../components/MidCard'
import LittleCard from '../components/LittleCard'
import styles from '../styles/Home.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faBookReader, faHandshake } from '@fortawesome/free-solid-svg-icons'

const wallpapers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

const infoAboutServices = [
  { id: 1, title: 'Лазерная резка', subTitle: 'Lorem ipsum dolor sit.', pic: 'https://lazer-rmk.ru/wp-content/uploads/2019/03/lazer-rezka.png' },
  { id: 2, title: 'Гравировка', subTitle: 'Lorem ipsum dolor sit.', pic: 'https://r-color.ru/catalog/raskroy-materiala/lazernaya-rezka/lazernaya-rezka.jpg' },
  { id: 3, title: 'Изготовление', subTitle: 'Lorem ipsum dolor sit.', pic: 'https://proflasermet.ru/assets/images/lra_2_big.jpg' },
  { id: 4, title: '3D обработка', subTitle: 'Lorem ipsum dolor sit.', pic: 'https://images.satu.kz/72430735_w640_h640_lazernaya-rezka-fanery.jpg' }
]

const Home = () => (
  <div className={styles.home}>
    <Head>
      <title>Мастерская План Б</title>
    </Head>

    <Heading
      title="Мастерская План-Б"
      pos="center"
    />

    <div className={styles.wallpaper}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className={styles.wallpaper}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {wallpapers.map(el => (
          <SwiperSlide key={el.id} >
            <BigCard id={el.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <Heading
      title="Список наших услуг"
      subTitle="Индивидуальный подход к каждому клиенту!"
    />

    <div className={styles.products}>
      {infoAboutServices.map(({ id, title, subTitle, pic }) => (
        <LittleCard key={id} title={title} subTitle={subTitle} pic={pic} />
      ))}
    </div>

    <Heading
      title="Как мы работаем"
      subTitle="Инструкция по заказу"
    />

    <div className={styles.work}>
      <div className={styles.wrapper}>
        <div className={styles.iconbox}>
          <FontAwesomeIcon icon={faPhoneVolume} className={styles.icon} />
        </div>
        <div className={styles.case}>
          <p className={styles.title}>Получение вашей заявки</p>
          <p>
            Вы заполняете небольшую заявку. Это можно сделать по телефону или
            непосредственно на нашем сайте, нажав на кнопку Сделать заказ. Затем
            мы выйдем с Вами на связь. Просто и быстро.
          </p>
        </div>
      </div>

      <div className={styles.wrapper} id={styles.second}>
        <div className={styles.case}>
          <p className={styles.title}>Консультация специалиста</p>
          <p>После того, как мы свяжемся Вам будет предложено несколько вариантов
            консультаций. Онлайн - мы зададим все уточняющие вопросы, чтобы
            составить максимально индивидуальный и точечный план работы. Очный -
            классический вариант встречи со специалистом, если Вам так будет
            удобно. Оба варианта несут одинаковое качество. </p>
        </div>
        <div className={styles.iconbox}>
          <FontAwesomeIcon icon={faBookReader} className={styles.icon} />
        </div>
      </div>

      <div className={styles.work}>
        <div className={styles.wrapper}>
          <div className={styles.iconbox}>
            <FontAwesomeIcon icon={faHandshake} className={styles.icon} />
          </div>
          <div className={styles.case}>
            <p className={styles.title}>Начинаем работу</p>
            <p>После консультации со специалистом Вам сообщается полный план
              работы. А Мастерская План Б приступает к работе. Мы всегда будет
              на связи и готовы выслушать любые дополнительные модификации! </p>
          </div>
        </div>
      </div>
    </div>

    <Heading
      title="Отвызы клиентов"
      subTitle="Больше в наших соц сетях!"
    />
  </div>
)

export default Home
