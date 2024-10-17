import styles from './Sort.module.css'
import useActions from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectFilter } from '../../redux/slices/filterSlice'

const sortList = [
  { name: 'Цена по убыванию', sortProperty: 'price_asc' },
  { name: 'Цена по возрастанию', sortProperty: 'price_desc' },
  { name: 'По наименованию, а-я', sortProperty: 'name_asc' },
  { name: 'По наименованию, я-а', sortProperty: 'name_desc' },
]

export default function Sort() {
  const { setLimit } = useActions()
  const { limit } = useAppSelector(selectFilter)

  const handleChangeLimit = (num: number) => setLimit(num)

  return (
    <div className={styles.inner}>
      <div className={styles.top}></div>
      <div className={styles.bottom}>
        <div className={styles.info}>Показано 18 из 137 товаров</div>
        <div className={styles.bottomWrapper}>
          <div className={styles.limit}>
            Показывать по:
            <button
              onClick={() => handleChangeLimit(3)}
              className={limit == 3 ? styles.activeLimit : ''}
            >
              3
            </button>
            <button
              onClick={() => handleChangeLimit(6)}
              className={limit == 6 ? styles.activeLimit : ''}
            >
              6
            </button>
            <button
              onClick={() => handleChangeLimit(9)}
              className={limit == 9 ? styles.activeLimit : ''}
            >
              9
            </button>
          </div>
          <div className={styles.sort}>
            Сортировка:
            <ul>
              {sortList.map((item, i) => (
                <li key={i} className={styles.sortItem}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
