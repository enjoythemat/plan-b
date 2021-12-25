import Gallery from 'react-grid-gallery'
import styles from '../styles/Album.module.scss'

const images = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: 'https://sun9-56.userapi.com/impf/c849328/v849328589/1b007c/7cGrTMU-ZY0.jpg?size=564x815&quality=96&sign=aa345315b9d96a8b7673613a6ccbf44e&type=album',
    thumbnail: 'https://sun9-56.userapi.com/impf/c849328/v849328589/1b007c/7cGrTMU-ZY0.jpg?size=564x815&quality=96&sign=aa345315b9d96a8b7673613a6ccbf44e&type=album'
  },
  {
    src: 'https://sun9-62.userapi.com/impf/c850536/v850536481/10564b/tmuBFuJzKhg.jpg?size=1560x1560&quality=96&sign=26855dfc318b883cea9e74aef960b5e5&type=album',
    thumbnail: 'https://sun9-62.userapi.com/impf/c850536/v850536481/10564b/tmuBFuJzKhg.jpg?size=1560x1560&quality=96&sign=26855dfc318b883cea9e74aef960b5e5&type=album'
  },
  {
    src: 'https://sun9-3.userapi.com/impf/c854528/v854528718/8342/zWQLeuXrKIQ.jpg?size=2160x2160&quality=96&rotate=270&sign=0746c21055c12a9d284e966768d7b948&type=album',
    thumbnail: 'https://sun9-3.userapi.com/impf/c854528/v854528718/8342/zWQLeuXrKIQ.jpg?size=2160x2160&quality=96&rotate=270&sign=0746c21055c12a9d284e966768d7b948&type=album'
  },
  {
    src: 'https://sun9-11.userapi.com/impf/c848520/v848520986/131d2a/CuHdmEfLv7A.jpg?size=2160x2160&quality=96&sign=5c4efe847b63ee01804955bb8120dff8&type=album',
    thumbnail: 'https://sun9-11.userapi.com/impf/c848520/v848520986/131d2a/CuHdmEfLv7A.jpg?size=2160x2160&quality=96&sign=5c4efe847b63ee01804955bb8120dff8&type=album'
  },
  {
    src: 'https://sun9-52.userapi.com/impf/c851424/v851424738/3a419/Yslizz0Ey1c.jpg?size=2160x2160&quality=96&sign=bd79cfd976f139643bf504588511cb37&type=album',
    thumbnail: 'https://sun9-52.userapi.com/impf/c851424/v851424738/3a419/Yslizz0Ey1c.jpg?size=2160x2160&quality=96&sign=bd79cfd976f139643bf504588511cb37&type=album'
  },
  {
    src: 'https://sun9-83.userapi.com/impf/c851424/v851424998/39e65/P0HHyf5uQEE.jpg?size=564x961&quality=96&sign=1360c196ffedcfb67a30973b18ba5697&type=album',
    thumbnail: 'https://sun9-83.userapi.com/impf/c851424/v851424998/39e65/P0HHyf5uQEE.jpg?size=564x961&quality=96&sign=1360c196ffedcfb67a30973b18ba5697&type=album'
  },
  {
    src: 'https://sun9-21.userapi.com/impf/c851424/v851424998/39e2f/EENGXZuHpHU.jpg?size=564x926&quality=96&sign=6de63c56db6a9247addd1c89c5f7081e&type=album',
    thumbnail: 'https://sun9-21.userapi.com/impf/c851424/v851424998/39e2f/EENGXZuHpHU.jpg?size=564x926&quality=96&sign=6de63c56db6a9247addd1c89c5f7081e&type=album'
  },
  {
    src: 'https://sun9-77.userapi.com/impf/c851424/v851424998/39d7e/6L2GaD1bpnU.jpg?size=564x851&quality=96&sign=adaa10bcb8ba24f5e81a82f9eafbf43f&type=album',
    thumbnail: 'https://sun9-77.userapi.com/impf/c851424/v851424998/39d7e/6L2GaD1bpnU.jpg?size=564x851&quality=96&sign=adaa10bcb8ba24f5e81a82f9eafbf43f&type=album'
  },
  {
    src: 'https://sun9-88.userapi.com/impf/c830608/v830608748/1a80b9/nl7zwlpo90M.jpg?size=570x520&quality=96&sign=f186cec74aab61e3ac29b86fe1c0db8b&type=album',
    thumbnail: 'https://sun9-88.userapi.com/impf/c830608/v830608748/1a80b9/nl7zwlpo90M.jpg?size=570x520&quality=96&sign=f186cec74aab61e3ac29b86fe1c0db8b&type=album'
  },
]

const Album = () => {
  return (
    <div className={styles.album}>
      <Gallery
        images={images}
        enableImageSelection={false}
      />
    </div>
  )
}

export default Album
