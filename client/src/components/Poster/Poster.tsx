import styles from './Poster.module.css'
import poster from './poster.png'
export default function Poster() {
  return (
    <div className={styles.poster}>
      <div className="container">
        <div className={styles.inner} style={{ backgroundImage: `url(${poster})` }}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Хит сезона <br /> <span>от Nike</span>
            </h2>
            <h3 className={styles.subtitle}>
              Nike Air Max <br /> Alpha Trainer 5
            </h3>
            <div className={styles.price}>
              <span>от</span>7 899 ₽
            </div>
            <button type="button" className="button button-orange">
              Подробнее
            </button>
          </div>
          <div className={styles.text}>
            Уникальная технология структуры стельки позволяет забыть про обувь на
            ноге.
          </div>
        </div>
      </div>
    </div>
  )
}
