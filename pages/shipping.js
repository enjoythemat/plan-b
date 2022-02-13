import Image from 'next/image'
import ship from '../public/ship.png'
import styles from '../styles/PAGES/Shipping.module.scss'

const Shipping = () => {
  return (
    <div className={styles.shipping}>

      <div className={styles.wrap}>
        <h2>ДОСТАВЛЯЕМ ГОТОВУЮ ПРОДУКЦИЮ ПО ВСЕЙ РОССИИ</h2>
        <p>
          Доставка — важная часть производственного процесса как для маленьких
          фирм, так и для крупных компаний.
        </p>
        <p>
          Работа с гравировкой, резкой и фрезеровкой требует бесперебойных поставок
          материалов. Мы знаем, как важно получить заказ в назначенное время, поэтому
          дорожим временем клиентов и ответственно относимся к срокам изготовления
          и сохранности продукции.
        </p>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.ship}>
          <h3>Отвечаем за качество работы</h3>
          <p>Перед отправкой каждое изделие проверяется на наличие брака</p>
        </div>
        <div className={styles.ship}>
          <h3>Оповещаем клиента о готовности</h3>
          <p>Менеджер сообщит о готовности заказа, а курьер позвонит за час до встречи</p>
        </div>
        <div className={styles.ship}>
          <h3>Не бежим от проблем и ошибок</h3>
          <p>Мы редко ошибаемся, но если такое случится — исправим недочеты за свой счет</p>
        </div>
        <div className={styles.ship}>
          <h3>Бережно относимся к заказам</h3>
          <p>Упаковываем вручную каждый заказ, будь то тысяча шильдов, или один ложемент</p>
        </div>
      </div>

      <div className={styles.wrap}>
        <h2>ОФОРМЛЯЕМ ДОСТАВКУ ГРУЗА:</h2>
        <p>- по Перми в течении одного рабочего дня;</p>
        <p>- по России от двух рабочих дней;</p>

        <div className={styles.img}>
          <Image src={ship} width={647} height={324} />
        </div>

        <b>Если из предложенных способов получения заказа Вы не нашли для себя подходящего,
          свяжитесь с нами по телефону: +7 (904) 848-87-07. Либо в социальных сетях,
          все наши контакты указаны снизу сайта.</b>
      </div>
    </div>
  )
}

export default Shipping
