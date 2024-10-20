import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../../redux/apies/productsApi'

export default function SingleProduct() {
  const { id } = useParams()
  const {
    data: product,
    isLoading,
    isError,
  } = useGetSingleProductQuery(id as string)

  if (isLoading) return <div>Загрузка...</div>
  if (isError) return <div>Продукт не найден</div>

  const { title, description, price, images } = product

  return (
    <div className="container">
      <div className="image">
        <img src={images[0]} alt="" />
      </div>
      <div className="content">
        <div className="title">{title}</div>
      </div>
    </div>
  )
}
