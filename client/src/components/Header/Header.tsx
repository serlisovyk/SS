import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './Header.module.css'
import logo from './logo.svg'
import search from './search.svg'
import heart from './heart.svg'
import cart from './cart.svg'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'
import useActions from '../../hooks/useActions'

export default function Header() {
  const navigate = useNavigate()

  const { setSearch } = useActions()

  const [isSearchActive, setIsSearchActive] = useState(false)
  const [searchActive, setSearchActive] = useState('')

  const handleSearchClick = () => setIsSearchActive(prevState => !prevState)
  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchActive(e.target.value)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchActive) {
      setSearch(searchActive)
      setSearchActive('')
      navigate(ROUTES.CATALOG)
    }
  }

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.top}>
          <ul className={styles.topList}>
            <li className={styles.topListItem}>
              <Link to={ROUTES.ABOUT}>О магазине</Link>
            </li>
            <li className={styles.topListItem}>
              <Link to={ROUTES.BLOG}>Наш блог</Link>
            </li>
            <li className={styles.topListItem}>
              <Link to={ROUTES.DELIVERY}>Доставка</Link>
            </li>
            <li className={styles.topListItem}>
              <Link to={ROUTES.PAYMENT}>Оплата</Link>
            </li>
            <li className={styles.topListItem}>
              <Link to={ROUTES.CONTACTS}>Контакты</Link>
            </li>
            <li className={styles.topListItem}>
              <Link to={ROUTES.INDIVIDUAL_ORDER}>Индивидуальный заказ</Link>
            </li>
          </ul>
          <div className={styles.login}>Вход / Регистрация</div>
        </div>
        <div className={styles.content}>
          <div className={styles.logoSearchWrapper}>
            <div className={styles.logo}>
              <Link to={ROUTES.HOME}>
                <img src={logo} alt="Logo" />
              </Link>
            </div>

            {isSearchActive && (
              <form onSubmit={handleSubmit}>
                <label htmlFor="search"></label>
                <input
                  type="text"
                  id="search"
                  name="search"
                  value={searchActive}
                  onChange={handleChangeSearchValue}
                  className={styles.searchInput}
                  placeholder="Поиск по каталогу товаров..."
                />
              </form>
            )}
          </div>

          {!isSearchActive && (
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
          )}

          <div className={styles.links}>
            <div
              className={`${styles.link} ${isSearchActive ? styles.activeLink : ''}`}
              onClick={handleSearchClick}
            >
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
