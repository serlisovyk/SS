import { SliderHeadingProps } from '../../../types/types'
import styles from './SliderHeading.module.css'
import arrow from './arrow.svg'

export default function SliderHeading({
  title,
  onPrevClick,
  onNextClick,
}: SliderHeadingProps) {
  return (
    <div className={styles.top}>
      <h2 className={styles.title}>
        {title.split(' ')[0]} <br /> {title.split(' ')[1]}
      </h2>
      <div className={styles.arrows}>
        <button onClick={onPrevClick} className={styles.arrow}>
          <img src={arrow} alt="Arrow Left" />
        </button>
        <button onClick={onNextClick} className={styles.arrow}>
          <img src={arrow} alt="Arrow Right" />
        </button>
      </div>
    </div>
  )
}
