import { useState, useEffect } from 'react'
import styles from './Intro.module.css'
import arrow from './arrow.svg'
import { useGetProductsQuery } from '../../redux/apies/productsApi'

export default function Intro() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const { data, isLoading } = useGetProductsQuery({})

  if (isLoading) return <div>Загрузка...</div>
  if (!data?.products || data?.products.length === 0)
    return <div>Продукты не найдены</div>

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % data?.products.length)

  const prevSlide = () =>
    setCurrentSlide(
      prev => (prev - 1 + data?.products.length) % data?.products.length
    )

  const { title, description, price, images } = data?.products[currentSlide]

  return (
    <div className={styles.intro}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <span>
                {title.split(' ')[0]} {title.split(' ')[1]}
              </span>
              <br />
              {title.split(' ')[2]} {title.split(' ')[3]}
            </h1>
            <div className={styles.text}>
              <p>{description}</p>
            </div>
            <div className={styles.price}>
              от <span>{price} грн.</span>
            </div>
            <button type="button" className="button">
              Подробнее
            </button>
            <div className={styles.arrows}>
              <button className={styles.arrow} onClick={prevSlide}>
                <img src={arrow} alt="Arrow Left" />
              </button>
              <button className={styles.arrow} onClick={nextSlide}>
                <img src={arrow} alt="Arrow Right" />
              </button>
            </div>
          </div>
          <div className={styles.image}>
            <img src={images[0]} alt={title} />
          </div>

          <div className={styles.dots}>
            {data?.products.map((_, i) => (
              <div
                key={i}
                className={`${styles.dot} ${
                  currentSlide === i ? styles.activeDot : ''
                }`}
                onClick={() => setCurrentSlide(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
