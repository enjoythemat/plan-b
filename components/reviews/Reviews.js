import Heading from '../Heading'
import ReviewCard from './ReviewCard'
import firstAvatar from '../../public/Andrey-Tarasov_.jpg'
import secondAvatar from '../../public/depositphotos_144297703-stock-photo-stylish-senior-man.jpg'
import thirdAvatar from '../../public/polina_venigor.jpeg'
import fourthAvatar from '../../public/32eda755d5bbb05126cf157cc8.jpg'
import avatar from '../../public/agent_smith.jpg'
import styles from '../../styles/reviews/Reviews.module.scss'

const Reviews = () => {
  const reviews = [
    {
      id: 0,
      name: 'Андрей',
      avatar: firstAvatar,
      text: 'Мастерская супер, заказывали несколько изготовлений из дерева, всё сделали очень быстро и чётко по нашим пожеланиям! 5+'
    },
    {
      id: 1,
      name: 'Константин',
      avatar: secondAvatar,
      text: 'Уже второй раз пользуемся Вашими услугами и советуем всем знакомым.'
    },
    {
      id: 2,
      name: 'Наталья',
      avatar: fourthAvatar,
      text: 'Спасибо, заказ выполнили, как надо, ребёнок доволен!'
    },
    {
      id: 3,
      name: 'Полина',
      avatar: thirdAvatar,
      text: 'Заказывали подарок для родителей из дерева, родители были в восторге)))'
    }
  ]

  return (
    <>
      <Heading
        title="Отзывы партнёров и клиентов"
        subTitle="Больше в наших соц сетях"
      />

      <div className={styles.reviews}>
        {reviews.map(el => (<ReviewCard key={el.id} name={el.name} avatar={el.avatar} text={el.text} />))}
      </div>
    </>
  )
}

export default Reviews
