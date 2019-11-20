import jss from './jss';

describe('JSS tests', () => {
  it('should initialize correctly', () => {
    expect(jss).toBeTruthy();
    expect(jss).toHaveProperty('version', '10.0.0');
  });
});
