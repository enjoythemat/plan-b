import Heading from '../Heading'
import styles from '../../styles/services/Services.module.scss'
import ServiceCard from './ServiceCard'

const Services = () => {
  const services = [
    { id: 1, title: 'Лазерная резка', subTitle: 'Lorem ipsum dolor sit.', pic: 'https://lazer-rmk.ru/wp-content/uploads/2019/03/lazer-rezka.png' },
    { id: 2, title: 'Гравировка', subTitle: 'Lorem ipsum dolor sit.', pic: 'https://r-color.ru/catalog/raskroy-materiala/lazernaya-rezka/lazernaya-rezka.jpg' },
    { id: 3, title: 'Изготовление', subTitle: 'Lorem ipsum dolor sit.', pic: 'https://proflasermet.ru/assets/images/lra_2_big.jpg' },
    { id: 4, title: '3D обработка', subTitle: 'Lorem ipsum dolor sit.', pic: 'https://images.satu.kz/72430735_w640_h640_lazernaya-rezka-fanery.jpg' }
  ]

  return (
    <>
      <Heading
        title="Список услуг"
        subTitle="Индивидуальный подход к каждому клиенту!"
      />

      <div className={styles.services}>
        {services.map(({ id, title, subTitle, pic }) => (
          <ServiceCard key={id} title={title} subTitle={subTitle} pic={pic} />
        ))}
      </div>
    </>
  )
}

export default Services
