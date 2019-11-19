import jss from './jss';

it('should jss initialize correctly', () => {
  expect(jss).toBeTruthy();
  expect(jss).toHaveProperty('version', '10.0.0');
});
