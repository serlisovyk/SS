import { useState } from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import styles from './Contacts.module.css'
import contact1 from './contact-1.svg'
import contact2 from './contact-2.svg'
import contact3 from './contact-3.svg'
import { cities } from '../../utils/constants'

export default function Contacts() {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (i: number) => setActiveTab(i)

  return (
    <div className="container">
      <Breadcrumbs />
      <h1>Наши контакты</h1>
      <div className={styles.tabs}>
        {cities.map((city, i) => (
          <h2
            key={i}
            className={activeTab === i ? styles.tabActive : styles.tab}
            onClick={() => handleTabClick(i)}
          >
            {city.name}
          </h2>
        ))}
      </div>
      <div className={styles.inner}>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <div className={styles.infoImage}>
              <img src={contact1} alt="Decor" />
            </div>
            <div className={styles.infoContent}>
              <h3>Адрес:</h3>
              <div>{cities[activeTab].address}</div>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoImage}>
              <img src={contact2} alt="Decor" />
            </div>
            <div className={styles.infoContent}>
              <h3>Телефон:</h3>
              <div>
                <strong>{cities[activeTab].phone}</strong>
              </div>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoImage}>
              <img src={contact3} alt="Decor" />
            </div>
            <div className={styles.infoContent}>
              <h3>Email:</h3>
              <div>{cities[activeTab].email}</div>
            </div>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src={cities[activeTab].mapSrc}
            width="900"
            height="500"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className={styles.form}>
        <h2>У вас есть вопросы? Напишите нам!</h2>
        <h3>Мы с радостью ответим на все интересующие вас вопросы.</h3>
        <form>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ваше имя"
            autoComplete="off"
            required
          />
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ваш email"
            autoComplete="off"
            required
          />
          <label htmlFor="message"></label>
          <input
            className={styles.input}
            id="message"
            name="message"
            placeholder="Текст вопроса"
            autoComplete="off"
          ></input>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  )
}
