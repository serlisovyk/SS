import styles from './NotFound.module.css'
import search from './search.svg'
import notfoundImage from './notfound.png'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

export default function NotFound() {
  return (
    <div className="container">
      <Breadcrumbs />
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>Ошибка</span> <br />
            такая страница <br /> не найдена
          </h1>
          <div className={styles.text}>
            <p>
              Запрашиваемая страница не найдена. Возможно она была удалена, либо её
              адрес был изменен. Попробуйте воспользоваться поиском.
            </p>
          </div>
          <form>
            <label htmlFor="search"></label>
            <div className={styles.input}>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Поиск по каталогу..."
                autoComplete="off"
              />
              <img src={search} alt="Decor" width={16} height={16} />
            </div>
          </form>
          <button type="button" className="button button-dark">
            На главную
          </button>
        </div>
        <div className={styles.image}>
          <img src={notfoundImage} alt="Sneakers" />
        </div>
      </div>
    </div>
  )
}
