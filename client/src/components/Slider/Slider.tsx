import { useState } from 'react'
import Product from '../Product/Product'
import SliderHeading from './SliderHeading/SliderHeading'
import { useGetProductsQuery } from '../../redux/apies/productsApi'

interface ISliderProps {
  title: string
}

export default function Slider({ title }: ISliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const { data, isLoading } = useGetProductsQuery({ limit: 6 })

  if (isLoading) return <div>Загрузка...</div>
  if (!data) return <div>Продукты не найдены</div>

  const { products } = data

  const itemsToShow = 3
  const slidesCount = products.length

  const handlePrevClick = () =>
    setCurrentSlide(prev => (prev - 1 + slidesCount) % slidesCount)

  const handleNextClick = () => setCurrentSlide(prev => (prev + 1) % slidesCount)

  const visibleProducts = products.slice(currentSlide, currentSlide + itemsToShow)

  if (visibleProducts.length < itemsToShow)
    visibleProducts.push(...products.slice(0, itemsToShow - visibleProducts.length))

  return (
    <div className="container">
      <SliderHeading
        title={title}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <div className="items">
        {visibleProducts.map(product => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </div>
  )
}
