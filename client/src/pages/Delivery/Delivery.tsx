import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import styles from './Delivery.module.css'

export default function Delivery() {
  return (
    <div className="container">
      <Breadcrumbs />
      <h1 className={styles.title}>Доставка и оплата</h1>
      <div className={styles.bigText}>
        <p>
          Мы стремимся сделать процесс получения вашего заказа максимально удобным и
          прозрачным. Пожалуйста, ознакомьтесь с вариантами доставки и способами
          оплаты, предоставленными ниже:
        </p>
      </div>
      <h2 className={styles.subtitle}>Доставка:</h2>
      <div className={styles.text}>
        <p>
          Мы сотрудничаем с транспортной компанией СДЭК для обеспечения надежной и
          быстрой доставки в любой уголок Украины. При оформлении заказа вы можете
          выбрать один из следующих вариантов доставки:
        </p>
      </div>
      <div className={styles.points}>
        <div className={styles.point}>
          <div className={styles.pointCount}>1</div>
          <div className={styles.pointContent}>
            <h3>Доставка до пункта выдачи СДЭК:</h3>
            <p>
              Воспользуйтесь ближайшим пунктом выдачи СДЭК для получения вашего
              заказа. Это удобно и позволяет вам выбрать место и время получения.
            </p>
          </div>
        </div>
        <div className={styles.point}>
          <div className={styles.pointCount}>2</div>
          <div className={styles.pointContent}>
            <h3>Доставка курьером до двери:</h3>
            <p>
              Если вы предпочитаете комфорт доставки прямо до вашего дома или офиса,
              выберите этот вариант. Курьер свяжется с вами для согласования удобного
              времени доставки.
            </p>
          </div>
        </div>
        <div className={styles.point}>
          <div className={styles.pointCount}>3</div>
          <div className={styles.pointContent}>
            <h3>Самовывоз:</h3>
            <p>
              Самовывоз: Вы можете забрать ваш заказ самостоятельно в одном из наших
              магазинов в городах Киев или Днепр. Этот вариант подходит для тех, кто
              предпочитает личное общение и быстрый доступ к своему заказу.
            </p>
            <h3 className={styles.marginTop}>Адреса магазинов:</h3>
            <p>
              Киев, ул. Киевская, 12345 <br />
              Днепр, ул. Днепровская, 67890
            </p>
          </div>
        </div>
      </div>
      <h2 className={styles.subtitle}>Оплата:</h2>
      <div className={styles.bigText}>
        <p>
          Мы предоставляем разнообразные способы оплаты, чтобы обеспечить ваш
          комфорт:
        </p>
      </div>
      <div className={styles.points}>
        <div className={styles.point}>
          <div className={styles.pointCount}>1</div>
          <div className={styles.pointContent}>
            <h3>Онлайн-оплата:</h3>
            <p>
              Вы можете оплатить ваш заказ онлайн на нашем сайте. Мы принимаем
              платежи с помощью банковских карт, что обеспечивает быстроту и
              безопасность транзакции.
            </p>
          </div>
        </div>
        <div className={styles.point}>
          <div className={styles.pointCount}>2</div>
          <div className={styles.pointContent}>
            <h3>Наличными или картой:</h3>
            <p>
              Если вы выбрали самовывоз из магазина, вы можете оплатить заказ
              наличными или картой прямо в магазине.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.point}>
        <div className={styles.pointContent}>
          <h3>Индивидуальный заказ:</h3>
          <p>
            При оформлении индивидуального заказа требуется 100% предоплата. Это
            гарантирует резервирование товара специально для вас и обеспечивает его
            создание согласно вашим уникальным предпочтениям.
          </p>
        </div>
      </div>
    </div>
  )
}
