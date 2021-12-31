import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Heading from '../components/Heading'
import LittleCard from '../components/LittleCard'
import BigCard from '../components/BigCard'

import Review from '../components/Review'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const infoAboutServices = [
  { id: 1, title: 'Лазерная резка', subTitle: 'Lorem ipsum dolor sit.', pic: 'https://lazer-rmk.ru/wp-content/uploads/2019/03/lazer-rezka.png' },
  { id: 2, title: 'Гравировка', subTitle: 'Lorem ipsum dolor sit.', pic: 'https://r-color.ru/catalog/raskroy-materiala/lazernaya-rezka/lazernaya-rezka.jpg' },
  { id: 3, title: 'Изготовление шильдиков', subTitle: 'Lorem ipsum dolor sit.', pic: 'https://proflasermet.ru/assets/images/lra_2_big.jpg' },
  { id: 4, title: '3D обработка', subTitle: 'Lorem ipsum dolor sit.', pic: 'https://images.satu.kz/72430735_w640_h640_lazernaya-rezka-fanery.jpg' }
]

const reviews = [
  {
    id: 1, name: 'Catherine Smith',
    comment: 'Хороший сервис, мой заказ выполнили быстро и качественно. Советую!',
    pic: 'https://avatarko.ru/img/avatar/7/serial_Game_of_Thrones_Daenerys_6929.jpg'
  },
  {
    id: 2, name: 'Connor McGregor',
    comment: 'Профессионалы своего дела, обязательно обращусь ещё.',
    pic: 'https://avatarko.ru/img/avatar/8/volk_serial_Game_of_Thrones_7458.jpg'
  },
  {
    id: 3,
    name: 'Helga Pataki',
    comment: 'Всё получилось очень аккуратно и красиво!',
    pic: 'https://avatarko.ru/img/avatar/31/serial_Game_of_Thrones_30102.jpg'
  },
  {
    id: 4,
    name: 'Mad Max',
    comment: 'Быстрее и дешевле, чем у конкурентов!',
    pic: 'https://avatarko.ru/img/avatar/10/serial_Game_of_Thrones_9333.jpg'
  }
]

const Home = () => (
  <div className={styles.home}>
    <Head>
      <title>Мастерская План Б</title>
    </Head>

    <Heading
      title="Мастерская План-Б"
      // subTitle="Лазерная резка и гравировка по современным стандартам"
      pos={'center'}
    />

    <div className={styles.wallpaper}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className={styles.wallpaper}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><BigCard /></SwiperSlide>
        <SwiperSlide><BigCard /></SwiperSlide>
        <SwiperSlide><BigCard /></SwiperSlide>
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
      title="Отвызы клиентов"
      subTitle="Больше в наших соц сетях!"
    />

    {/*<div className={styles.reviews}>*/}
    {/*  {reviews.map(({ id, name, comment, pic }) => (*/}
    {/*    <Review key={id} name={name} comment={comment} pic={pic} />*/}
    {/*  ))}*/}
    {/*</div>*/}
  </div>
)

export default Home
