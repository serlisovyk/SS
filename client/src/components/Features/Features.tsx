import styles from './Features.module.css'
import feature1 from './feature-1.svg'
import feature2 from './feature-2.svg'
import feature3 from './feature-3.svg'

export default function Features() {
  return (
    <div className={styles.features}>
      <div className="container">
        <div className={styles.featuresInner}>
          <div className={styles.featuresItem}>
            <div>
              <img src={feature1} alt="Decor" />
            </div>
            <div className={styles.featuresContent}>
              <h2>Только оригинальные товары</h2>
              <p>Гарантированная подлинность Nike и высокое качество кроссовок.</p>
            </div>
          </div>
          <div className={styles.featuresItem}>
            <div>
              <img src={feature2} alt="Decor" />
            </div>
            <div className={styles.featuresContent}>
              <h2>Профессиональный сервис</h2>
              <p>
                Команда экспертов, готовых помочь с выбором размера ответить на все
                вопросы.
              </p>
            </div>
          </div>
          <div className={styles.featuresItem}>
            <div>
              <img src={feature3} alt="Decor" />
            </div>
            <div className={styles.featuresContent}>
              <h2>Эксклюзивный выбор</h2>
              <p>
                Богатый ассортимент оригинальных моделей Nike, включая редкие
                выпуски.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
