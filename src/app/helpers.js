import config from './config';

const fromCurrency = (string) => {
  const result = string
    .replace('R$ ', '')
    .replace(/\./g, '')
    .replace(/\,/g, '.');

  return Number(result);
};

const toCurrency = number => new Intl.NumberFormat(
  config.language,
  { style: 'currency', currency: config.currency },
).format(number).replace(/\s/g, ' ');

const validation = (fields) => {
  if (fields.length > 0) {
    for (const field of fields) {
      let value = field.value.trim();

      if (field.mask) {
        value = fromCurrency(field.value);
      }

      if (field.required && value.length === 0) {
        return false;
      }

      if (field.number && Number.isNaN(Number(value))) {
        return false;
      }

      if (field.min && parseInt(value, 10) < field.min) {
        return false;
      }

      if (field.max && parseInt(value, 10) > field.max) {
        return false;
      }
    }
  }

  return true;
};

const createState = values => config.days.map((day, index) => {
  const labels = config.labels;
  const value = values[index];

  return {
    label: index === 0 ? labels.tomorrow : `${labels.in} ${day} ${labels.days}`,
    value: value ? toCurrency(value) : toCurrency(0),
  };
});

export {
  fromCurrency,
  toCurrency,
  validation,
  createState,
};
