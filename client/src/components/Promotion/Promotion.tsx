import styles from './Promotion.module.css'
import promotion1 from './promotion-1.jpg'
import promotion2 from './promotion-2.jpg'

export default function Promotion() {
  return (
    <div className={styles.promotion}>
      <div className="container">
        <div className={styles.inner}>
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${promotion1})` }}
          >
            <h2 className={styles.title}>
              Новая коллекция в каталоге Nike Air Max Solo
            </h2>
            <div className={styles.link}>Перейти в каталог</div>
          </div>
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${promotion2})` }}
          >
            <h2 className={styles.title}>
              Новая коллекция в каталоге Nike Air Max Solo
            </h2>
            <div className={styles.link}>Перейти в каталог</div>
          </div>
        </div>
      </div>
    </div>
  )
}
