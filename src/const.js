export const SLIDER_LENGTH = 3;
export const CURRENT_SLIDE = 0;
export const CURRENT_TAB = 1;
export const MAIN_MENU_ITEMS = [`Автомобили`, `Контакты`, `Услуги`, `Вакансии`];
export const FOOTER_MENU_ITEMS = [`Корпоративным клиентам`, `Клиентам`, `Аренда авто`, `Каршеринг`, `Как продать авто`, `Trade-in`, `Test drive`];

export const FEATURES = [
  {
    feature: `engine`,
    legend: `Тип двигателя`,
  },
  {
    feature: `transmission`,
    legend: `Коробка передач`,
  },
  {
    feature: `power`,
    legend: `Мощность`,
  },
  {
    feature: `volume`,
    legend: `Объем`,
  }
];

export const TABS = [`Характеристики`, `Отзывы`, `Контакты`];

export const CARD = {
  name: `Марпех 11`,
  features: [`бензин`, `механика`, `100 л.с.`, `1.4 л`],
  priceDiscount: `2 300 000`,
  priceFull: `2 400 000`,
  credit: `11 000`,
  fullFeatures: [
    {
      feature: `Трансмиссия`,
      description: `Роботизированная`,
    },
    {
      feature: `Мощность двигателя, л.с.`,
      description: `249`,
    },
    {
      feature: `Тип двигателя`,
      description: `Бензиновый`,
    },
    {
      feature: `Привод`,
      description: `Полный`,
    },
    {
      feature: `Объем двигателя, л`,
      description: `2.4`,
    },
    {
      feature: `Макс. крутящий момент`,
      description: `370/4500`,
    },
    {
      feature: `Количество цилиндров`,
      description: `4`,
    },
  ],
  reviews: [
    {
      name: `Борис Иванов`,
      plus: `мощность, внешний вид`,
      minus: `Слабые тормозные колодки (пришлось заменить)`,
      comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен`,
      rating: `3`,
      dateTime: `2021-08-26T02:15:25.000Z`,
    },
    {
      name: `Марсель Исмагилов`,
      plus: `Cтиль, комфорт, управляемость`,
      minus: `Дорогой ремонт и обслуживание`,
      comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`,
      rating: `3`,
      dateTime: `2021-09-27T02:15:25.000Z`,
    },
  ],
};

export const CONTACTS = [
  {
    contact: `Адрес`,
    description: `${`Санкт-Петербург,`}\n${`набережная реки Карповки, дом 5`}`,
  },
  {
    contact: `Режим работы`,
    description: `Ежедневно, с 10:00 до 21:00`,
  },
  {
    contact: `Телефон`,
    description: `8 (800) 333-55-99`,
  },
  {
    contact: `E-mail`,
    description: `info@avto-moto.ru`,
  },
];

export const RATING_VALUES = [`Отлично`, `Хорошо`, `Средне`, `Плохо`, `Ужасно`];
