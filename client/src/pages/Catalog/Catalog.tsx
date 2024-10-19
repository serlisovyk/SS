import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Product from '../../components/Product/Product'
import Sort from '../../components/Sort/Sort'
import { useGetProductsQuery } from '../../redux/apies/productsApi'
import styles from './Catalog.module.css'

export default function Catalog() {
  const { data: products, isLoading } = useGetProductsQuery()

  console.log(products)

  return (
    <div className="container">
      <Breadcrumbs />
      <h1 className={styles.title}>Коллекция Air Max</h1>
      <Sort />
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <div className={styles.catalog}>
          {products.products?.map((product: any) => (
            <Product {...product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  )
}
