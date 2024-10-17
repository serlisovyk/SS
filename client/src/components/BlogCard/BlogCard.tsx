import styles from './BlogCard.module.css'
import blog from './blog.jpg'

export default function BlogCard() {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${blog})` }}>
      <div className={styles.marker}>советы</div>
      <h2 className={styles.title}>
        Десять советов по <br /> выбору кроссовок для <br /> спорта
      </h2>
      <div className={styles.bottom}>
        <div className={styles.link}>Подробнее</div>
        <div className={styles.date}>10 Августа, 2023</div>
      </div>
    </div>
  )
}
