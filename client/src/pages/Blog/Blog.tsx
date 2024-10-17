import BlogCard from '../../components/BlogCard/BlogCard'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import InfoNewsLetter from '../../components/InfoNewsLetters/infoNewsletter'
import styles from './Blog.module.css'

export default function Blog() {
  return (
    <div className="container">
      <Breadcrumbs />
      <h1 className={styles.title}>Блог</h1>
      <div className={styles.inner}>
        <div className={styles.blogs}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className={styles.categories}>
          <h2 className={styles.categoriesTitle}>Рубрики</h2>
          <div className={styles.categoriesItem}>
            <h3>все публикации</h3>
            <div>123</div>
          </div>
          <div className={styles.categoriesItem}>
            <h3>новости</h3>
            <div>5</div>
          </div>
          <div className={styles.categoriesItem}>
            <h3>статьи</h3>
            <div>14</div>
          </div>
          <InfoNewsLetter />
        </div>
      </div>
    </div>
  )
}
