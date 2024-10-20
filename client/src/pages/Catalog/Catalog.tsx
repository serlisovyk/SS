import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Product from '../../components/Product/Product'
import Sort from '../../components/Sort/Sort'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useGetProductsQuery } from '../../redux/apies/productsApi'
import { selectFilter } from '../../redux/slices/filterSlice'
import styles from './Catalog.module.css'

export default function Catalog() {
  const {
    limit,
    sort: { sortProperty: sortBy },
  } = useAppSelector(selectFilter)

  const { data, isLoading } = useGetProductsQuery({ limit, sortBy })

  if (!data) return <div>Продукты не найдены</div>

  return (
    <div className="container">
      <Breadcrumbs />
      <h1 className={styles.title}>Коллекция Air Max</h1>
      <Sort totalProducts={data?.total} />
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <div className={styles.catalog}>
          {data.products?.map(product => (
            <Product {...product} key={product._id} />
          ))}
        </div>
      )}
    </div>
  )
}
