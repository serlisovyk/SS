import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../../redux/apies/productsApi'
import styles from './SingleProduct.module.css'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { useEffect, useState } from 'react'

export default function SingleProduct() {
  const { id } = useParams()
  const {
    data: product,
    isLoading,
    isError,
  } = useGetSingleProductQuery(id as string)

  const [selectedSize, setSelectedSize] = useState<number>()
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (product) setCurrentImage(0)
  }, [])

  if (isLoading) return <div>Загрузка...</div>
  if (!product) return <div>Продукт не найден</div>
  if (isError) return <div>Продукт не найден</div>

  const { title, description, price, oldPrice, images, colors, sizes } = product

  return (
    <div className="container">
      <Breadcrumbs />
      <div className={styles.inner}>
        <div className={styles.images}>
          <div className={styles.bigImage}>
            <img src={images[currentImage]} alt="Product picture" />
          </div>
          <div className={styles.smallImages}>
            {images.map(image => (
              <img
                key={image}
                src={image}
                alt="Product picture"
                onClick={() => setCurrentImage(images.indexOf(image))}
              />
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.colors}>
            Цвета:
            {colors.map(color => (
              <div
                className={styles.color}
                key={color.name}
                style={{ background: color.hex }}
              >
                {color.name}
              </div>
            ))}
          </div>
          <div className={styles.sizes}>
            <div className={styles.sizesTop}>
              <div className={styles.sizesTitle}>Размер (EU):</div>
              <div className={styles.sizesModal}>Размерная таблица</div>
            </div>
            <div className={styles.sizesContent}>
              {sizes.map(size => (
                <button
                  type="button"
                  className={selectedSize === size ? styles.activeSize : styles.size}
                  key={size}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.prices}>
            {oldPrice && <div className={styles.oldPrice}>{oldPrice} грн.</div>}
            <div className={styles.price}>{price} грн.</div>
          </div>
          <button></button>
        </div>
      </div>
    </div>
  )
}
