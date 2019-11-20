import Home from './index';

describe('Home component tests', () => {
  it('should renders without crashing', () => {
    const home = Home();
    expect(home).toBeTruthy();
  });
});
