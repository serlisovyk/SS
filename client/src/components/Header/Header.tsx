import styles from './Header.module.css'
import logo from './logo.svg'
import search from './search.svg'
import heart from './heart.svg'
import cart from './cart.svg'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.top}>
          <ul className={styles.topList}>
            <li className={styles.topListItem}>О магазине</li>
            <li className={styles.topListItem}>Наш блог</li>
            <li className={styles.topListItem}>Доставка</li>
            <li className={styles.topListItem}>Оплата</li>
            <li className={styles.topListItem}>Контакты</li>
            <li className={styles.topListItem}>Индивидуальный заказ</li>
          </ul>
          <div className={styles.login}>Вход / Регистрация</div>
        </div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
          <ul className={styles.contentList}>
            <li className={styles.contentListItem}>
              <span></span>
              <span></span>
              Каталог
            </li>
            <li className={styles.contentListItem}>Мужские</li>
            <li className={styles.contentListItem}>Женские</li>
            <li className={styles.contentListItem}>Детские</li>
            <li className={styles.contentListItem}>Распродажа</li>
          </ul>
          <div className={styles.links}>
            <div className={styles.link}>
              <img src={search} alt="Search" />
            </div>
            <div className={styles.link}>
              <img src={heart} alt="Heart" />
              <span>5</span>
            </div>
            <div className={styles.link}>
              <img src={cart} alt="Cart" />
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
