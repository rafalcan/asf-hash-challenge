import {
  isEqual,
  findById,
  fromCurrency,
  toCurrency,
  validation,
  calculation,
} from './helpers';

describe('Helpers tests', () => {
  it('should be equals', () => {
    expect(isEqual({ name: 'equals' }, { name: 'equals' })).toBeTruthy();
  });

  it('should return an item by id from a collection', () => {
    const item = { id: 'field1', name: 'field1' };
    const list = [
      item,
    ];
    expect(findById(list, 'field1')).toEqual(item);
  });

  it('should return an item by id from a NodeList', () => {
    document.body.innerHTML = `
      <input id="field1" name="field1">
    `;
    const list = document.querySelectorAll('input');
    const item = document.createElement('input');
    item.id = 'field1';
    item.name = 'field1';
    expect(findById(list, 'field1')).toEqual(item);
  });

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
      },
    ]);

    expect(result).toBeFalsy();
  });

  it('should return correct values', () => {
    expect(calculation(150, 3, 4)).toEqual([
      132.48, 135.36, 138.24, 144.00,
    ]);
  });
});
