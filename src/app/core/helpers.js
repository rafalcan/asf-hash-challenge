import environment from '@env/environment';

const isEqual = (first, second) => JSON.stringify(first) === JSON.stringify(second);

const findById = (list, value) => {
  if (list instanceof NodeList) {
    const newList = Array.from(list);
    return newList.find(item => item.id === value);
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
  environment.language,
  { style: 'currency', currency: environment.currency },
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

  const make = (steps, day, lastCalc) => {
    if (steps === 0) {
      return Number(parseFloat(lastCalc).toFixed(2));
    }

    const days = steps * 30 - day;
    const defineDays = days > 0 ? days : 0;
    const calc = divisionMDR - (divisionMDR * defineDays * percent / 30);
    return make(steps - 1, day, calc + lastCalc);
  };

  return environment.days.map(day => make(installments, day, 0));
};

export {
  isEqual,
  findById,
  fromCurrency,
  toCurrency,
  validation,
  calculation,
};
