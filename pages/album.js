import styles from '../styles/Album.module.scss'

// const images=[
//   {
//     src: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg'
//   },
//   {
//     src: 'https://cdn.pixabay.com/photo/2019/06/12/15/07/cat-4269479_960_720.jpg'
//   },
//   {
//     src: 'https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg'
//   },
//   {
//     src: 'https://cdn.pixabay.com/photo/2014/07/08/12/36/bird-386725_960_720.jpg'
//   },
//   {
//     src: 'https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573_960_720.jpg'
//   },
//   {
//     src: 'https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg'
//   },
//   {
//     src: 'https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg'
//   },
//   {
//     src: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg'
//   },
//   {
//     src: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg'
//   },
//   {
//     src: 'https://cdn.pixabay.com/photo/2019/03/09/17/30/horse-4044547_960_720.jpg'
//   }
// ]

// const images = [
//   {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "After Rain (Jeshu John - designerspics.com)"
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//     caption: "Boats (Jeshu John - designerspics.com)"
//   },
//
//   {
//     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//     thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 212
//   },
//   {
//     src: 'https://sun9-56.userapi.com/impf/c849328/v849328589/1b007c/7cGrTMU-ZY0.jpg?size=564x815&quality=96&sign=aa345315b9d96a8b7673613a6ccbf44e&type=album',
//     thumbnail: 'https://sun9-56.userapi.com/impf/c849328/v849328589/1b007c/7cGrTMU-ZY0.jpg?size=564x815&quality=96&sign=aa345315b9d96a8b7673613a6ccbf44e&type=album',
//     thumbnailWidth: 141,
//     thumbnailHeight: 204
//   },
//   {
//     src: 'https://sun9-62.userapi.com/impf/c850536/v850536481/10564b/tmuBFuJzKhg.jpg?size=1560x1560&quality=96&sign=26855dfc318b883cea9e74aef960b5e5&type=album',
//     thumbnail: 'https://sun9-62.userapi.com/impf/c850536/v850536481/10564b/tmuBFuJzKhg.jpg?size=1560x1560&quality=96&sign=26855dfc318b883cea9e74aef960b5e5&type=album',
//     thumbnailWidth: 156,
//     thumbnailHeight: 156
//   },
//   {
//     src: 'https://sun9-3.userapi.com/impf/c854528/v854528718/8342/zWQLeuXrKIQ.jpg?size=2160x2160&quality=96&rotate=270&sign=0746c21055c12a9d284e966768d7b948&type=album',
//     thumbnail: 'https://sun9-3.userapi.com/impf/c854528/v854528718/8342/zWQLeuXrKIQ.jpg?size=2160x2160&quality=96&rotate=270&sign=0746c21055c12a9d284e966768d7b948&type=album',
//     thumbnailWidth: 216,
//     thumbnailHeight: 216
//   },
//   {
//     src: 'https://sun9-11.userapi.com/impf/c848520/v848520986/131d2a/CuHdmEfLv7A.jpg?size=2160x2160&quality=96&sign=5c4efe847b63ee01804955bb8120dff8&type=album',
//     thumbnail: 'https://sun9-11.userapi.com/impf/c848520/v848520986/131d2a/CuHdmEfLv7A.jpg?size=2160x2160&quality=96&sign=5c4efe847b63ee01804955bb8120dff8&type=album',
//     thumbnailWidth: 156,
//     thumbnailHeight: 156
//   },
//   {
//     src: 'https://sun9-52.userapi.com/impf/c851424/v851424738/3a419/Yslizz0Ey1c.jpg?size=2160x2160&quality=96&sign=bd79cfd976f139643bf504588511cb37&type=album',
//     thumbnail: 'https://sun9-52.userapi.com/impf/c851424/v851424738/3a419/Yslizz0Ey1c.jpg?size=2160x2160&quality=96&sign=bd79cfd976f139643bf504588511cb37&type=album',
//     thumbnailWidth: 156,
//     thumbnailHeight: 156
//   },
//   {
//     src: 'https://sun9-83.userapi.com/impf/c851424/v851424998/39e65/P0HHyf5uQEE.jpg?size=564x961&quality=96&sign=1360c196ffedcfb67a30973b18ba5697&type=album',
//     thumbnail: 'https://sun9-83.userapi.com/impf/c851424/v851424998/39e65/P0HHyf5uQEE.jpg?size=564x961&quality=96&sign=1360c196ffedcfb67a30973b18ba5697&type=album',
//     thumbnailWidth: 141,
//     thumbnailHeight: 240
//   },
//   {
//     src: 'https://sun9-21.userapi.com/impf/c851424/v851424998/39e2f/EENGXZuHpHU.jpg?size=564x926&quality=96&sign=6de63c56db6a9247addd1c89c5f7081e&type=album',
//     thumbnail: 'https://sun9-21.userapi.com/impf/c851424/v851424998/39e2f/EENGXZuHpHU.jpg?size=564x926&quality=96&sign=6de63c56db6a9247addd1c89c5f7081e&type=album',
//     thumbnailWidth: 141,
//     thumbnailHeight: 231
//   },
//   {
//     src: 'https://sun9-77.userapi.com/impf/c851424/v851424998/39d7e/6L2GaD1bpnU.jpg?size=564x851&quality=96&sign=adaa10bcb8ba24f5e81a82f9eafbf43f&type=album',
//     thumbnail: 'https://sun9-77.userapi.com/impf/c851424/v851424998/39d7e/6L2GaD1bpnU.jpg?size=564x851&quality=96&sign=adaa10bcb8ba24f5e81a82f9eafbf43f&type=album',
//     thumbnailWidth: 141,
//     thumbnailHeight: 213
//   },
//   {
//     src: 'https://sun9-88.userapi.com/impf/c830608/v830608748/1a80b9/nl7zwlpo90M.jpg?size=570x520&quality=96&sign=f186cec74aab61e3ac29b86fe1c0db8b&type=album',
//     thumbnail: 'https://sun9-88.userapi.com/impf/c830608/v830608748/1a80b9/nl7zwlpo90M.jpg?size=570x520&quality=96&sign=f186cec74aab61e3ac29b86fe1c0db8b&type=album',
//     thumbnailWidth: 57,
//     thumbnailHeight: 52
//   },
// ]

const Album = () => {
  return (
    <div className={styles.album}>

    </div>
  )
}

export default Album
