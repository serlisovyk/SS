import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './InfoNewsletter.module.css'

export default function InfoNewsLetter() {
  const [email, setEmail] = useState('')

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)

  const handleSubmitEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (email.trim().length === 0) return

    console.log(`Email sent: ${email}`)
    setEmail('')
  }
  return (
    <div className={styles.infoNewsletter}>
      <h3>Подпишитесь на рассылку</h3>
      <div className={styles.infoNewsletterText}>
        <p>Регулярные скидки и спецпредложения, а так же новости компании.</p>
      </div>
      <form className={styles.infoNewsletterForm} onSubmit={handleSubmitEmail}>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          placeholder="Ваш Email"
          autoComplete="off"
        />
        <button type="submit" className="button-submit">
          Подписаться
        </button>
      </form>
      <span>
        Согласен с <span> политикой конфиденциальности</span>
      </span>
    </div>
  )
}
