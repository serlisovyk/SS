import styles from './Product.module.css'
import heart from './heart-empty.svg'
import cart from './cart.svg'
import { IProduct } from '../../types/types'

export default function Product({
  title,
  price,
  oldPrice,
  images,
  colors,
  saleCF,
}: IProduct) {
  return (
    <div className={styles.product}>
      <div className={styles.top}>
        {saleCF ? (
          <div className={styles.bunSale}>-{saleCF}%</div>
        ) : (
          <div className={styles.bun}>новинка</div>
        )}
        <div className={styles.heart}>
          <img src={heart} alt="Heart" />
        </div>
      </div>
      <div className={styles.image}>
        <img src={images[0]} alt="Product" />
      </div>
      <div className={styles.info}>
        <div className={styles.category}>женские</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.colors}>
          Цвета: <br />
          {colors.map(color => (
            <span
              key={color.name}
              className={styles.color}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
        <div className={styles.bottom}>
          <div>
            <span className={styles.price}>{price} грн.</span>
            {oldPrice && <span className={styles.oldPrice}>{oldPrice} грн.</span>}
          </div>
          <div className={styles.cart}>
            <img src={cart} alt="Cart" />
          </div>
        </div>
      </div>
    </div>
  )
}
