import styles from './Intro.module.css'
import image from './intro.png'
import arrow from './arrow.svg'

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>Air max</span> <br />
          Flyknit Racer
        </h1>
        <div className={styles.text}>
          <p>
            Усиленный носок и прочный пластиковый каркас. Инновационная технология
            раскрывается через перфорированную стельку
          </p>
        </div>
        <div className={styles.price}>
          от <span>7899 грн.</span>
        </div>
        <button type="button" className="button">
          Подробнее
        </button>
        <div className={styles.arrows}>
          <button className={styles.arrow}>
            <img src={arrow} alt="Arrow" />
          </button>
          <button className={styles.arrow}>
            <img src={arrow} alt="Arrow" />
          </button>
        </div>
      </div>
      <div className={styles.image}>
        <img src={image} alt="Sneakers" />
      </div>

      <div className={styles.dots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  )
}
