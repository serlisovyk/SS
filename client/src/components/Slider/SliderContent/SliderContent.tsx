import styles from './SliderContent.module.css'

export default function SliderContent({ items }) {
  return (
    <div className={styles.items}>
      {items.map((item, i) => (
        <div key={i} className={styles.item}>
          {item}
        </div>
      ))}
    </div>
  )
}
