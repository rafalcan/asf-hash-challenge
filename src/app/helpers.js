import config from './config';

const findById = (list, value) => {
  if (list instanceof NodeList) {
    for (const item of list.values()) {
      if (item.id === value) return item;
    }

    return false;
  }

  return list.find(item => item.id === value);
};

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

const calculation = (sale, installments, mdr) => {
  const percent = mdr / 100;
  const division = sale / installments;
  const divisionMDR = division - (division * percent);

  const defineDays = (day, step) => {
    const calc = step - day;
    return calc > 0 ? calc : 0;
  };

  return config.days.map((day) => {
    let sum = 0;

    for (let i = 1; i <= installments; i++) {
      sum += divisionMDR - (divisionMDR * defineDays(day, i * 30) * percent / 30);
    }

    return sum;
  });
};

export {
  findById,
  fromCurrency,
  toCurrency,
  validation,
  calculation,
};
