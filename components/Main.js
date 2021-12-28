import styles from '../styles/Main.module.scss'
import Heading from './Heading'
import LittleCard from './LittleCard'
import Review from './Review'
import BigCard from './BigCard'

const infoAboutServices = [
  { id: 1, title: 'Lorem', subTitle: 'Lorem ipsum dolor sit.', pic: '' },
  { id: 2, title: 'Lorem', subTitle: 'Lorem ipsum dolor sit.', pic: '' },
  { id: 3, title: 'Lorem', subTitle: 'Lorem ipsum dolor sit.', pic: '' },
  { id: 4, title: 'Lorem', subTitle: 'Lorem ipsum dolor sit.', pic: '' }
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

const Main = () => {
  return (
    <div className={styles.wrapper}>

      <Heading
        title="Мастерская План-Б в Перми"
        subTitle="Лазерная резка и гравировка по строгому соблюдению нормативов"
      />

      <div className={styles.products}>
        <BigCard />
      </div>

      <Heading
        title="Список наших услуг"
        subTitle="Индивидуальный подход к каждому клиенту!"
      />

      <div className={styles.products}>
        {infoAboutServices.map(({ id, title, subTitle }) => (
          <LittleCard key={id} title={title} subTitle={subTitle} />
        ))}
      </div>

      <Heading
        title="Отвызы клиентов"
        subTitle="Больше в наших соц сетях!"
      />

      <div className={styles.reviews}>
        {reviews.map(({ id, name, comment, pic }) => (
          <Review key={id} name={name} comment={comment} pic={pic} />
        ))}
      </div>
    </div>
  )
}

export default Main
