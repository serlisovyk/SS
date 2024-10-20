export enum ROUTES {
  HOME = '/',
  CATALOG = '/catalog',
  ABOUT = '/about',
  BLOG = '/blog',
  DELIVERY = '/delivery',
  PAYMENT = '/payment',
  CONTACTS = '/contacts',
  INDIVIDUAL_ORDER = '/individual-order',
  NOT_FOUND = '*',
  SINGLE_PRODUCT = '/products/:id',
}

export const BASE_URL = 'http://localhost:3001'

export const cities = [
  {
    name: 'Киев',
    address: 'ул. Киевская, 12345',
    phone: '12345',
    email: 'kyiv@store.ua',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325516.3770455823!2d30.532690549999998!3d50.402035500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1729172922371!5m2!1sru!2sua',
  },
  {
    name: 'Днепр',
    address: 'ул. Днепровская, 67890',
    phone: '67890',
    email: 'dnipro@store.ua',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169324.7561501514!2d35.000356450000005!3d48.462298499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe303fd08468f%3A0xa1cf3d5f2c11aba!2z0JTQvdC10L_RgCwg0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1sru!2sua!4v1729173714634!5m2!1sru!2sua',
  },
]

export const sortList = [
  { name: 'Цена по убыванию', sortProperty: 'price_asc' },
  { name: 'Цена по возрастанию', sortProperty: 'price_desc' },
  { name: 'По наименованию, а-я', sortProperty: 'name_asc' },
  { name: 'По наименованию, я-а', sortProperty: 'name_desc' },
]

export const limits = [3, 6, 9]
