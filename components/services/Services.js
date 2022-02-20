import Heading from '../Heading'
import ServiceCard from './ServiceCard'
import styles from '../../styles/services/Services.module.scss'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Лазерная резка',
      subTitle: 'Изготовление любых изделий по ценам гораздо ниже магазинных',
      pic: 'https://lazer-rmk.ru/wp-content/uploads/2019/03/lazer-rezka.png',
      delay: 0.03
    },
    {
      id: 2,
      title: 'Гравировка',
      subTitle: 'Гравировка и исправление уже готовых изделий из металла и дерева',
      pic: 'https://r-color.ru/catalog/raskroy-materiala/lazernaya-rezka/lazernaya-rezka.jpg',
      delay: 0.06
    },
    {
      id: 3,
      title: 'Готовые изделия',
      subTitle: 'Продажа готовых изделий для вашего дома, работы или бинеса',
      pic: 'https://proflasermet.ru/assets/images/lra_2_big.jpg',
      delay: 0.09
    },
    {
      id: 4,
      title: '3D обработка',
      subTitle: '3D обработка по всем современным стандартам и нормам',
      pic: 'https://images.satu.kz/72430735_w640_h640_lazernaya-rezka-fanery.jpg',
      delay: 0.12
    }
  ]

  return (
    <>
      <Heading
        title="Что мы предлагаем"
        subTitle="Позвоните нам, если не нашли необходимый пункт"
      />

      <div className={styles.services}>
        {services.map(({ id, title, subTitle, pic, delay }) => (
            <ServiceCard
              key={id}
              title={title}
              subTitle={subTitle}
              pic={pic}
              delay={delay}
            />
          ))}
      </div>
    </>
  )
}

export default Services
