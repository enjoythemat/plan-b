import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/PAGES/Album.module.scss'

const images = [
  {
    src: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/06/12/15/07/cat-4269479_960_720.jpg'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2014/07/08/12/36/bird-386725_960_720.jpg'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573_960_720.jpg'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/03/09/17/30/horse-4044547_960_720.jpg'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2020/06/29/00/26/iris-5350997__340.jpg'
  },
  {
    src: 'https://www.eea.europa.eu/themes/biodiversity/state-of-nature-in-the-eu/state-of-nature-2020-subtopic/image_print'
  },
  {
    src: 'https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-1200x800.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal'
  },
  {
    src: 'https://nypost.com/wp-content/uploads/sites/2/2021/12/nature_14.jpg?quality=80&strip=all&w=744'
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/279314888.jpg?k=634792d1c74f7c16f71502c6e4f2dd83e56c5745965ea94c3205046ca4736217&o=&hp=1'
  },
  {
    src: 'https://www.verywellhealth.com/thmb/AbVJd0RqySe_EvKFP1jOu6tTB4A=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1283080277-b7010f7c094e4fc8bbb6f8cdfd299f7a.jpg'
  }
]

const Album = () => {
  const [layout, setLayout] = useState('none')
  const [img, setImg] = useState('')

  const layoutHandler = (e) => {
    setLayout(prev => {
      return prev === 'none' ? 'flex' : 'none'
    })
    setImg(e.target.currentSrc)
  }

  return (
    <>
      <Head>
        <title>PLAN B - Фотоальбом</title>
      </Head>
      <div className={styles.album}>
        {images.map((el, index) =>(
          <div className={styles.img} key={index}>
            <img src={el.src} onClick={layoutHandler} />
          </div>
        ))}
      </div>
      <div className={styles.layout} style={{display: layout}} onClick={layoutHandler}>
        <img src={img} />
      </div>
    </>
  )
}

export default Album
