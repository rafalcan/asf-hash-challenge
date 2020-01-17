import Field from './field';

describe('Field component tests', () => {
  it('should renders without crashing', () => {
    expect(
      Field({
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
      Field();
    }).toThrow('missing required props');
  });

  it('should not renders without required props', () => {
    expect(() => {
      Field({
        name: 'field1',
        type: 'number',
        value: '',
        min: 1,
        max: 12,
      });
    }).toThrow('id, name and type are required');
  });
});
