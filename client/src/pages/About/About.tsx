import Features from '../../components/Features/Features'
import InfoNewsLetter from '../../components/InfoNewsLetters/infoNewsletter'
import styles from './About.module.css'
import about from './about.jpg'
import sneakers from './sneakers.png'

export default function About() {
  return (
    <section>
      <div className={styles.heading}>
        <div className="container">
          <h1 className={styles.headingTitle}>
            Интернет-магазин <br /> <span>Swoosh store</span>
          </h1>
          <div className={styles.headingText}>
            Добро пожаловать в <strong>Swoosh Store</strong> – ваш источник подлинных
            кроссовок Nike и непревзойденного стиля! Мы рады представить вам
            уникальную онлайн-платформу, где вы сможете окунуться в мир инноваций и
            моды от легендарного бренда спортивной обуви.
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img src={about} alt="Two sneakerses" />
      </div>
      <div className={styles.info}>
        <div className="container">
          <div className={styles.infoInner}>
            <div className={styles.infoContent}>
              <h2 className={styles.infoTitle}>Легендарное наследие Nike:</h2>
              <div className={styles.infoText}>
                <p>
                  Swoosh Store - это место, где история и стиль сливаются воедино. Мы
                  гордимся тем, что предлагаем вам только оригинальные кроссовки
                  Nike, продукцию, которая воплощает более чем полувековое наследие
                  инноваций, комфорта и качества. Каждая пара кроссовок – это не
                  просто спортивная обувь, это произведение искусства, воплощающее
                  дух победы и страстную преданность активному образу жизни. <br />
                  SwooshStore - это не просто интернет-магазин, а место, где ваша
                  страсть к стилю и качеству встретится с легендарной маркой Nike. Мы
                  стремимся предоставлять нашим клиентам только подлинные продукты,
                  которые отражают высший стандарт дизайна, инноваций и технологий,
                  заложенных в каждой паре кроссовок Nike.
                </p>
              </div>
            </div>
            <InfoNewsLetter />
          </div>
        </div>
      </div>
      <Features />
      <div className={styles.gratitude}>
        <div className="container">
          <div className={styles.gratitudeText}>
            <p>
              Наши кроссовки отличаются не только эстетическим великолепием, но и
              функциональностью. Мы предлагаем широкий выбор моделей для разных видов
              спорта, от бега до баскетбола, и для различных повседневных ситуаций.
              Будь то икона стиля, такая как Air Max, или универсальная классика, как
              Air Force 1 - у нас есть именно то, что подойдет вам.
            </p>
            <p>
              На SwooshStore мы ценим ваше доверие и комфортность при покупке. Вся
              наша обувь поставляется непосредственно от производителя, что
              гарантирует вам аутентичность каждой пары кроссовок. Мы также
              предлагаем удобные опции доставки и безопасные методы оплаты, чтобы
              сделать ваш опыт покупки максимально приятным и беззаботным.
            </p>
            <p>
              Присоединяйтесь к нашему сообществу любителей Nike, чтобы разделить
              радость от качественной обуви и уникального стиля. Мы всегда готовы
              помочь вам с выбором, ответить на вопросы и обеспечить вас идеальной
              парой кроссовок, которая подчеркнет вашу индивидуальность и даст вам
              уверенность в каждом шаге.
            </p>
            <strong>
              Спасибо, что выбираете SwooshStore – ваш источник оригинальных
              кроссовок Nike!
            </strong>
          </div>
        </div>
        <div className={styles.gratitudeImage}>
          <img src={sneakers} alt="Sneakers" />
        </div>
      </div>
    </section>
  )
}
