import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Sort from '../../components/Sort/Sort'
import styles from './Catalog.module.css'

export default function Catalog() {
  return (
    <div className="container">
      <Breadcrumbs />
      <h1 className={styles.title}>Коллекция Air Max</h1>
      <Sort />
      <div className="products">Products</div>
    </div>
  )
}
