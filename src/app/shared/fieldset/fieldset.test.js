import Fieldset from './fieldset';

describe('Fieldset component tests', () => {
  it('should renders without crashing', () => {
    expect(
      Fieldset({
        label: 'Field number',
        obs: 'Max 12',
        id: 'field1',
        name: 'field1',
        type: 'number',
        value: '',
        min: 1,
        max: 12,
      }),
    ).toBeTruthy();
  });

  it('should not renders without props', () => {
    expect(() => {
      Fieldset();
    }).toThrow('missing required props');
  });

  it('should not renders without required props', () => {
    expect(() => {
      Fieldset({
        obs: 'Max 12',
        id: 'field1',
        name: 'field1',
        type: 'number',
        value: '',
        min: 1,
        max: 12,
      });
    }).toThrow('label, id, name and type are required');
  });
});
