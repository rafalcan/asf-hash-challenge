import {
  fromCurrency,
  toCurrency,
  validation,
  createState,
} from './helpers';

describe('Helpers tests', () => {
  it('should remove money format', () => {
    expect(fromCurrency('R$ 1.000,00')).toEqual(1000);
  });

  it('should add money format', () => {
    expect(toCurrency(1000)).toEqual('R$ 1.000,00');
  });

  it('should pass in the validations', () => {
    const result = validation([
      {
        id: 'field1',
        name: 'field1',
        type: 'number',
        value: 'R$ 1.000,00',
        required: true,
        number: true,
        mask: true,
        min: 1,
      },
    ]);

    expect(result).toBeTruthy();
  });

  it('should not pass in the validations', () => {
    const result = validation([
      {
        id: 'field1',
        name: 'field1',
        type: 'number',
        value: '',
        required: true,
        number: true,
        min: 1,
        max: 12,
      },
    ]);

    expect(result).toBeFalsy();
  });

  it('should return a state object', () => {
    expect(createState([0, 0, 0, 0])).toEqual([
      { label: 'Amanhã', value: 'R$ 0,00' },
      { label: 'Em 15 dias', value: 'R$ 0,00' },
      { label: 'Em 30 dias', value: 'R$ 0,00' },
      { label: 'Em 90 dias', value: 'R$ 0,00' },
    ]);
  });
});
