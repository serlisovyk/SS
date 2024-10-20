import { useState, useCallback } from 'react'
import styles from './Sort.module.css'
import useActions from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectFilter } from '../../redux/slices/filterSlice'
import arrow from './arrow.svg'
import { ISort } from '../../types/types'
import { limits, sortList } from '../../utils/constants'

export default function Sort({ totalProducts }: { totalProducts: number }) {
  const { setLimit, setSort } = useActions()
  const { limit, sort } = useAppSelector(selectFilter)

  const [isSortOpen, setIsSortOpen] = useState(false)
  const toggleSortOpen = useCallback(() => setIsSortOpen(prev => !prev), [])

  const handleChangeLimit = (num: number) => {
    if (limit !== num) setLimit(num)
  }

  const handleClickSortListItem = (item: ISort) => {
    if (item.sortProperty !== sort.sortProperty) {
      setSort(item)
      setIsSortOpen(false)
    }
  }

  return (
    <div className={styles.inner}>
      <div className={styles.top}></div>
      <div className={styles.bottom}>
        <div className={styles.info}>
          Показано {limit} из {totalProducts} товаров
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.limit}>
            Показывать по:
            {limits.map(value => (
              <button
                key={value}
                onClick={() => handleChangeLimit(value)}
                className={limit === value ? styles.activeLimit : ''}
              >
                {value}
              </button>
            ))}
          </div>
          <div className={styles.sort}>
            <strong>Сортировка:</strong>
            <span onClick={toggleSortOpen}>{sort.name}</span>
            <img
              src={arrow}
              alt="Arrow"
              className={isSortOpen ? styles.sortArrowRotate : styles.sortArrow}
            />
            {isSortOpen && (
              <ul className={styles.popup}>
                {sortList.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => handleClickSortListItem(item)}
                    className={
                      item.sortProperty === sort.sortProperty
                        ? styles.activeSortItem
                        : ''
                    }
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
