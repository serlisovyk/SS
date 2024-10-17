import { useState } from 'react'
import Product from '../Product/Product'
import SliderHeading from './SliderHeading/SliderHeading'
import SliderContent from './SliderContent/SliderContent'

export default function Slider({ title }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const products = [
    <Product title={111} />,
    <Product title={222} />,
    <Product title={333} />,
    <Product title={444} />,
    <Product title={555} />,
    <Product title={666} />,
    <Product title={777} />,
    <Product title={888} />,
    <Product title={999} />,
  ]
  const itemsToShow = 3

  const slidesCount = products.length

  const handlePrevClick = () =>
    setCurrentSlide(prev => (prev - 1 + slidesCount) % slidesCount)

  const handleNextClick = () => setCurrentSlide(prev => (prev + 1) % slidesCount)

  const visibleProducts = []
  for (let i = 0; i < itemsToShow; i++) {
    const index = (currentSlide + i) % slidesCount
    visibleProducts.push(products[index])
  }

  return (
    <div className="container">
      <SliderHeading
        title={title}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <SliderContent items={visibleProducts} />
    </div>
  )
}
