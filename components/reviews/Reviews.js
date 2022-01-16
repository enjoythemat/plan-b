import Heading from '../Heading'
import ReviewCard from './ReviewCard'
import avatar from '../../public/agent_smith.jpg'
import styles from '../../styles/reviews/Reviews.module.scss'

const Reviews = () => {
  const reviews = [
    { id: 0, name: 'Agent Smith', avatar: avatar, text: 'Быстро и качественно Быстро и качественно Быстро и качественно Быстро и качественно Быстро и качественно Быстро и качественно' },
    { id: 1, name: 'Trinity', avatar: avatar, text: 'Работа выполнена по всем моим пожеланиям Работа выполнена по всем моим пожеланиям Работа выполнена по всем моим пожеланиям' },
    { id: 2, name: 'Morpheus', avatar: avatar, text: 'Буду обращаться ещё! Буду обращаться ещё! Буду обращаться ещё!' },
    { id: 3, name: 'Mr. Anderson', avatar: avatar, text: 'Подарок получился идеальным! Подарок получился идеальным! Подарок получился идеальным!' }
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
