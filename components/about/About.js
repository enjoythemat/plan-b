import styles from '../../styles/about/About.module.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.wrapper}>
        <h1>О компании</h1>
        <h3>Пермская мастерская, в которой реализуются любые идеи</h3>
        <p>
          План Б - производственная компания, поэтому изготовим Вам изделие, не
          делая
          никакой накрутки магазина, и учтем все Ваши пожелания по цвету, форме
          и
          содержанию изделия.
        </p>
        <h3>В нашей мастерской делают:</h3>
        <p>
          Буквы и слова из дерева;
          Фоторамки и семейные дерева;
          Медальницы для юных чемпионов;
          Детские метрики;
          Топперы для ваших мероприятий;
          Свадебный декор (арки, ширмы, объемные буквы);
          Предметы интерьера;
          Декор для дома;
          Сувенирная продукция;
          Светильники;
          Оборудование для бизнеса... и многое другое!
        </p>

        <button>Подробнее</button>

        <div className={styles.numbers}>
          <div>
            <h2>5</h2>
            <p>лет</p>
          </div>
          <div>
            <h2>500</h2>
            <p>клиентов</p>
          </div>
          <div>
            <h2>100%</h2>
            <p>положительных отзывов</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
