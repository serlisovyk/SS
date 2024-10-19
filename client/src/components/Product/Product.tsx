import styles from './Product.module.css'
import heart from './heart-empty.svg'
// import product from './product.png'
import cart from './cart.svg'

export default function Product({ title, price, images }: any) {
  return (
    <div className={styles.product}>
      <div className={styles.top}>
        <div className={styles.bun}>новинка</div>
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
          <span></span>
          <span></span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>{price} грн.</div>
          <div className={styles.cart}>
            <img src={cart} alt="Cart" />
          </div>
        </div>
      </div>
    </div>
  )
}
