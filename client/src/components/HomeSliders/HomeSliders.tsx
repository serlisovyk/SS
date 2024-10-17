import React, { useState } from 'react'
import Product from '../Product/Product'
import styles from './HomeSliders.module.css'
import arrow from './arrow.svg'

export default function HomeSliders() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const products = [
    <Product title={11111} />,
    <Product title={22222} />,
    <Product title={3333} />,
    <Product title={34444} />,
    <Product title={5555} />,
    <Product title={6666} />,
    <Product title={7777} />,
    <Product title={8888} />,
    <Product title={9999} />,
  ]
  const itemsToShow = 3

  const slideCount = products.length

  const handlePrevClick = () => {
    setCurrentSlide(prev => (prev - 1 + slideCount) % slideCount)
  }

  const handleNextClick = () => {
    setCurrentSlide(prev => (prev + 1) % slideCount)
  }

  const getVisibleProducts = () => {
    const visible = []
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentSlide + i) % slideCount
      visible.push(products[index])
    }
    return visible
  }

  return (
    <div className="container">
      <div className={styles.top}>
        <h2 className={styles.title}>
          Последние <br /> поступления
        </h2>
        <div className={styles.arrows}>
          <button onClick={handlePrevClick} className={styles.arrow}>
            <img src={arrow} alt="Arrow Left" />
          </button>
          <button onClick={handleNextClick} className={styles.arrow}>
            <img src={arrow} alt="Arrow Right" />
          </button>
        </div>
      </div>
      <div className={styles.products}>
        {getVisibleProducts().map((product, index) => (
          <div key={index} className={styles.product}>
            {product}
          </div>
        ))}
      </div>
    </div>
  )
}
