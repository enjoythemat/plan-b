import Slide from './Slide'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import styles from '../../styles/poster/Poster.module.scss'

const Poster = () => {
  const posters = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]

  return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className={styles.poster}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
      >
        {posters.map(el => (
          <SwiperSlide key={el.id} >
            <Slide id={el.id} />
          </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default Poster
